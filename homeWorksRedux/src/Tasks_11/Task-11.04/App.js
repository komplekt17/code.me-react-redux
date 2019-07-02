import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
	handleRadioAction,
	handlerNavAction,
	handleTimeAction} from './actions';
import TestNavigation from "./Components/testNavigation";
import TestResult from "./Components/testResult";
import TestView from "./Components/testView";
import TestTotal from "./Components/testTotal";
import '../../App.css';
/*
	11-03. Реализуйте тест. Дан массив с вопросами и правильными ответами. Вопросы должны показываться по одному. Пользователь может двигаться по вопросам стрелками 'назад' и 'вперед'. После того, как пользователь ответит на все вопросы, должна появится кнопочка 'проверить ответы'. По нажатию на эту кнопочку нужно вывести все вопросы на экран, под вопросами должно быть следующее: 'ваш ответ такой-то, правильно' или 'ваш ответ такой-то, не правильно, правильный ответ такой-то'. Правильные ответы должны быть зеленого цвета, а неправильные - красного.
*/
class App extends Component {
// подсчёт правильных ответотов
	getRightAnswers = () => {
		const arr = this.props.storeToTask.test.slice();
		let count = 0;
		for(var i=0; i<arr.length; i++){
			if (arr[i].right === arr[i].check) count += 1;
		}
		return count;
	}
	// подсчёт всех ответотов
	getAnswers = () => {
		const arr = this.props.storeToTask.test.slice();
		let count = 0;
		for(var i=0; i<arr.length; i++){
			if (arr[i].check !== '') count += 1;
		}
		return count;
	}

	componentDidMount = () => {
		const {handleTimeToTask} = this.props
		var mm;
		var ss;
		var totalSeconds = 0;
		this.intervalId = setInterval(() => {
			++totalSeconds;
			ss = this.addZero(totalSeconds % 60);
			mm = this.addZero(parseInt(totalSeconds / 60));
			handleTimeToTask(mm+":"+ss);
		}, 1000);
	}

	// componentWillUnmount(){
	// 	clearInterval(this.intervalId);
	// }

	addZero = (val) => {
		var valString = val + "";
		if (valString.length < 2) {return "0" + valString;} 
		else {return valString;}
	}
	render(){
		const {
		storeToTask,
		handleRadioToTask,
		handlerNavToTask} = this.props;

		const {test, current, testDone, getTime} = storeToTask;

		if(testDone) clearInterval(this.intervalId);

		return(
			<div className="App-header">
				<div className="container">
					{!testDone ?
					<div className="row">
						<div className="body-test col-md-6">
							<TestNavigation 
		          				totalQuestions={test.length}
		          				totalAnswers={this.getAnswers()} 
								handlerNav={handlerNavToTask}/>
							<TestView 
								test={test} 
								current={current}
								handleRadioChange={handleRadioToTask}/>
						</div>
						<div className="col-md-6">
							Time {getTime}
						</div>
					</div>
					 : 
					<div className="row">
						<div className="col-md-6">
							<TestResult test={test}/>
						</div> 
						<div className="col-md-6">
							<TestTotal 
		          				totalQuestions={test.length}
		          				totalRightAnswers={this.getRightAnswers()}
		          				time={getTime}/> 
						</div>
					</div>
					}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return ({ storeToTask: state })
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleRadioToTask: (idx) => dispatch(handleRadioAction(idx)),
		handlerNavToTask: (name) => dispatch(handlerNavAction(name)),
		handleTimeToTask: (time) => dispatch(handleTimeAction(time))
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);