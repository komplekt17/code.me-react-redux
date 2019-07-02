import React, {Component} from "react";
import TestNavigation from "./dopComponents-11.04/testNavigation-11.04"
import TestView from "./dopComponents-11.04/testView-11.04"
import TestResult from "./dopComponents-11.04/testResult-11.04"
import TestTotal from "./dopComponents-11.04/testTotal-11.04"
/*
	11-04. Модифицируйте предыдущую задачу так, чтобы пользователь мог выбрать один из вариантов ответа с помощью 4-х радио кнопочек. Варианты ответов также должны храниться в массиве вопросами (придумайте удобную структуру массива, чтобы там лежал и вопрос, и правильный ответ, и варианты ответов).
	test from here http://upworktestru.com/reactjs-test-upwork-answers-questions/
*/

class Task extends Component{

	state = {

	    test: [
			{
				question: "Which of the following is true about Flux Dispatcher?",
				answers: [
					"The dispatcher is used to broadcast payloads to registered callbacks.",
					"Dispatcher is used to checking changes in DOM.",
					"The dispatcher is used to set state in React application.",
					"The dispatcher is used to send data to components."
				],
				right: 0,
				check: ""
			},
			{
				question:
				"PropTypes is used for ___ ?",
				answers: ["getInitialState", "Validation", "getPropsValue", "getDefaultProps", "typechecking"],
				right: 4,
				check: ""
			},
			{
				question: "What is needed to write ReactJs application with ES6 classes and have cross-browser support?",
				answers: [
					"Webpack or browserify to generate ES4 code",
					"Babel to transpile code to ES5",
					"Babel with es2015 plugin to transpile code to ES5",
					"Babel with CLI support",
					"Babel with react and es2015 presets"
				],
				right: 4,
				check: ""
			},
			{
				question:
				"Which statement about propTypes is incorrect?",
				answers: [
					"It improves auto completion for some IDEs",
					"It provides easier checking of production code",
					"It’s easy to define required props for each component",
					"If used with isRequired property, it automatically checks if value is undefined while developing"
				],
				right: 1,
				check: ""
			},
			{
				question: "How transform JSX code in browser?",
				answers: [
					"With Babel stand alone build", 
					"Standard Babel and react preset", 
					"JSXTransformer is recommended by Facebook starting from ReactJs v0.15",
					"You can’t use JSX in browser, must transpile it to ES5 before sending to browser"
					],
				right: 1,
				check: ""
			},
			{
				question: "Which function is invoked just before render() during component update?",
				answers: [
					"componentDidMount()", 
					"componentInit()", 
					"componentWillUpdate()",
					"beforeRender()"
					],
				right: 2,
				check: ""
			},
			{
				question: "ReactJS is developed by _____?",
				answers: [
					"Google", 
					"Facebook", 
					"Apple",
					"Adobe"
					],
				right: 1,
				check: ""
			},
			{
				question: "Which is function is invoked just before render() during initial rendering?",
				answers: [
					"componentDidMount()", 
					"componentBeforeOccur()", 
					"componentWillReceiveMount()",
					"componentWillMount()"
					],
				right: 0,
				check: ""
			}
		],
		done: false, // индткатор окончания теста
		current: 0, // текущий тест
		getTime: "00:00"
	}

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

				// проверка окончания теста
				const arr = this.state.test.slice();
			    let count = 0;
			    for(var i = 0; i<arr.length; i++){
			    	if(arr[i].check === '') count += 1;
			    }
			    if(count === 0) {
			    	this.setState({done: true});
    				clearInterval(this.intervalId);
			    }else alert('You must have answer all questions')

			}else{
				this.setState({current: this.state.current + 1})
			}
		}
	}

	handleRadioChange = (ev) => {
		const idCheck = ev.target.id;
		const arr = idCheck.split('.');
		const idQuest = arr[0]; // id вопроса
		const idAnswer = arr[1]; // id варианта ответа

		const newArray = this.state.test.slice(); // копируем стейт
		newArray[idQuest].check = Number(idAnswer);
		this.setState(newArray);
		
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
							<TestNavigation 
								handlerNav={this.handlerNav} 
								current={current}
								test={test} />
							<TestView 
								test={test} 
								current={current}
								valueTest={valueTest}
								handleRadioChange={this.handleRadioChange}
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