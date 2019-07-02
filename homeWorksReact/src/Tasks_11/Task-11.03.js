import React, {Component} from "react";
import TestNavigation from "./dopComponents-11.03/testNavigation-11.03"
import TestView from "./dopComponents-11.03/testView-11.03"
import TestResult from "./dopComponents-11.03/testResult-11.03"
import TestTotal from "./dopComponents-11.03/testTotal-11.03"
/*
	11-03. Реализуйте тест. Дан массив с вопросами и правильными ответами. Вопросы должны показываться по одному. Пользователь может двигаться по вопросам стрелками 'назад' и 'вперед'. После того, как пользователь ответит на все вопросы, должна появится кнопочка 'проверить ответы'. По нажатию на эту кнопочку нужно вывести все вопросы на экран, под вопросами должно быть следующее: 'ваш ответ такой-то, правильно' или 'ваш ответ такой-то, не правильно, правильный ответ такой-то'. Правильные ответы должны быть зеленого цвета, а неправильные - красного.
*/

class Task extends Component{

	state = {
	    test: [
			{
				question: "Файл с расширением XLS содержит",
				answers: [
					"Только одну таблицу",
					"Только один рабочий лист с возможно несколькими таблицами",
					"Несколько рабочих листов, образующих рабочую книгу"
				],
				right: 2,
				check: ""
			},
			{
				question:
				"Для выделения мышкой нескольких областей следует прижать клавишу",
				answers: ["Esc", "Shift", "Ctrl", "Alt"],
				right: 2,
				check: ""
			},
			{
				question: "EXCEL это",
				answers: [
					"Графический редактор",
					"Текстовый процессор",
					"Операционная система",
					"Табличный процессор",
					"Клавиша на клавиатуре"
				],
				right: 3,
				check: ""
			},
			{
				question:
				"Можно ли изменить имя рабочего листа и названия рабочей книги?",
				answers: [
					"рабочего листа",
					"Только рабочей книги",
					"И рабочего листа и рабочей книги",
					"Нельзя в обоих случаях"
				],
				right: 2,
				check: ""
			},
			{
				question: "Сколько чисел можно записать в одной ячейке?",
				answers: ["Только одно", "Не более двух", "Более двух"],
				right: 0,
				check: ""
			}
		],
		done: false,
		current: 0,
		valueTest: '', 
		getTime: "00:00"
	};

	handlerNav = (ev) => {
		if(ev.target.name === 'previous'){
			if(this.state.current === 0){
				this.setState({current: 0})
			}else{
				this.setState({current: this.state.current - 1})
			}
		}else{ // name === 'next'
			if(this.state.current === this.state.test.length - 1){
				this.setState({current: this.state.test.length - 1})
			}else{
				this.setState({current: this.state.current + 1})
			}
		}
		
		this.setState({valueTest: ''});
	}

	handlerValue = (ev) => {
		this.setState({valueTest: ev.target.value})
	}

	handleClick = (idx) => {
	    
	    const arr = this.state.test.slice();

	    // находим длину массива ответов
	    const lgth = arr[idx].answers.length;

	    if (Number(this.state.valueTest) <= 0 || 
	    	Number(this.state.valueTest) > lgth ||
	    	this.state.valueTest === '') {
				this.setState({valueTest: ''});
				alert("Enter correct number from 1 to "+ lgth);
	    } else {

			arr[idx].check = Number(this.state.valueTest)-1;

		    // проверка окончания теста
		    let count = 0;
		    for(var i = 0; i<arr.length; i++){
		    	if(arr[i].check === '') count += 1;
		    }
		    if(count === 0) {
		    	this.setState({done: true});

    			clearInterval(this.intervalId);
		    }

			this.setState(arr);
	    }
	}

  	getAnswers = () => {
    	const arr = this.state.test.slice();
		let count = 0;
		for(var i=0; i<arr.length; i++){
			if (arr[i].right === arr[i].check) count += 1;
		}
		return count;
	}

	componentDidMount() {
		var mm;
		var ss;
		var totalSeconds = 0;
		this.intervalId = setInterval(() => {
			++totalSeconds;
			ss = this.addZero(totalSeconds % 60);
			mm = this.addZero(parseInt(totalSeconds / 60));
			this.setState({ getTime: mm+":"+ss })
		}, 1000);
     }

	componentWillUnmount(){
		clearInterval(this.intervalId);
	}

	addZero = (val) => {
		var valString = val + "";
		if (valString.length < 2) {return "0" + valString;} 
		else {return valString;}
	}

	render(){

		const {test, current, valueTest} = this.state;
		return(
			<div className="container">
				{
					!this.state.done ?
					<div className="row">
						<div className="col-md-6">
							<TestNavigation handlerNav={this.handlerNav}/>
							<TestView 
								test={test} 
								current={current}
								valueTest={valueTest}
								handlerValue={this.handlerValue}
								handleClick={this.handleClick}/>
						</div>
						<div className="col-md-6">
							Time {this.state.getTime}
						</div>
					</div> : 
					<div className="row">
						<div className="col-md-6">
							<TestResult test={test}/>
						</div> 
						<div className="col-md-6">
							<TestTotal 
		          				totalQuestions={this.state.test.length}
		          				totalAnswers={this.getAnswers}
		          				time={this.state.getTime}/> 
						</div>
					</div>
				}
			</div>
		);
		
	}
}

export default Task;