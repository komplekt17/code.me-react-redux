import React, { Component } from "react";
import TestResult from "./dopComponents-11.02/testResult-11.02"
import TestPage from "./dopComponents-11.02/testPage-11.02"
import TestTotal from "./dopComponents-11.02/testTotal-11.02"
/*
	11-02. Реализуйте тест. Дан массив с вопросами и правильными ответами. Выведите все эти вопросы на экран, а под каждым вопросом - инпут. В этот инпут пользователь должен ввести правильный ответ на вопрос. Под всеми вопросами должна находиться кнопка 'сдать тест'. По нажатию на эту кнопку под вопросами вместо инпутов должно появится следующее: 'ваш ответ такой-то, правильно' или 'ваш ответ такой-то, не правильно, правильный ответ такой-то'. Правильные ответы должны быть зеленого цвета, а неправильные - красного.
*/

class Task extends Component {
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
    done: false
  };

  handlerValue = (ev) => {
    const idx = ev.target.name;
    const arr = this.state.test.slice();

    // находим длину массива ответов
    const lgth = arr[idx].answers.length;

    if (Number(ev.target.value) <= 0 || Number(ev.target.value) > lgth) {

      alert("Enter correct number from 1 to "+ lgth);
      arr[idx].check = '';
      this.setState(arr);
    } else {
      arr[idx].check = Number(ev.target.value)-1;
      this.setState(arr);
      
    }
  };

  handleClick = ev => {
  	const idx = ev.target.getAttribute('name');
    const elem = this.state.test[idx].check;
    const elemParent = ev.target.parentNode.parentNode;
    if (elem !== "") elemParent.classList.add("done-3");
    else alert("Enter answer number");

    // проверка окончания теста
    let count = 0;
    const arr = this.state.test.slice();
    for(var i = 0; i<arr.length; i++){
    	if(arr[i].check === '') count += 1;
    }
    if(count === 0) {
    	this.setState({done: true});
    }
  };

  getAnswers = () => {
    	const arr = this.state.test.slice();
		let count = 0;
		for(var i=0; i<arr.length; i++){
			if (arr[i].right === arr[i].check) count += 1;
		}
		return count;
	}

  render() {

  	const {test} = this.state;
    
    return (
      <div className="container">
        <div className="row">
          	<div className="col-md-6">
          		{
          			this.state.done ? 
          				<TestResult 
          					test={test} />
          				:
          				<TestPage 
      							test={test} 
      							handlerValue={this.handlerValue} 
      							handleClick={this.handleClick}/> 
				      }
          	</div>
          	{
          		this.state.done ? 
          			<TestTotal 
          				totalQuestions={this.state.test.length}
          				totalAnswers={this.getAnswers}/> 
          			: ''
          	}
      	</div>
      </div>
    );
  }
}

export default Task;
