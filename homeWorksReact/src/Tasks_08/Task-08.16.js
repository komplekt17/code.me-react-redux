import React, { Component } from "react";
/*
	8-16. Дан следующий массив с вопросами и вариантами ответов:

this.state = {
	test: [
		{
			question: 'Вопрос 1',
			answers: [
				'Ответ1',
				'Ответ2',
				'Ответ3',
				'Ответ4',
				'Ответ5',
			],
			right: 3, //номер правильного ответа
		},
		{
			...
		},
		{
			...
		},
	]
};
Реализуйте текст с вопросами и вариантами ответов. Каждый вопрос должен быть в своем абзаце, а под ним - 5 радиокнопочек, с помощью которых можно выбрать один из ответов. Если ответ правильный - вопрос должен покраситься в зеленый цвет, а если неправильный - в красный.

*/

class Tasks extends Component {

	state = {
		test: [
			{
				question: 'EXCEL это',
				answers: [
					'Графический редактор',
					'Текстовый процессор',
					'Операционная система',
					'Табличный процессор',
					'Клавиша на клавиатуре',
				],
				right: 3,
				check: 0 
			},
			{
				question: 'Файл с расширением XLS содержит',
				answers: [
					'Только одну таблицу',
					'Только один рабочий лист с возможно несколькими таблицами',
					'Несколько рабочих листов, образующих рабочую книгу',
				],
				right: 2,
				check: 0 
			},
			{
				question: 'Для выделения мышкой нескольких областей следует прижать клавишу',
				answers: [
					'Esc',
					'Shift',
					'Ctrl',
					'Alt'
				],
				right: 2,
				check: 0  
			},
			{
				question: 'Можно ли изменить имя рабочего листа и названия рабочей книги?',
				answers: [
					'рабочего листа',
					'Только рабочей книги',
					'И рабочего листа и рабочей книги',
					'Нельзя в обоих случаях',
				],
				right: 2,
				check: 0 
			},
			{
				question: 'Сколько чисел можно записать в одной ячейке?',
				answers: [
					'Только одно',
					'Не более двух',
					'Более двух',
				],
				right: 0,
				check: 0
			},
		]
	}

	handleRadioChange = (ev) => {
		const idCheck = ev.target.id;
		const arr =  idCheck.split('.');
		const idQuest = arr[0]; // id вопроса
		const idAnswer = arr[1]; // id варианта ответа

		const newArray = this.state.test.slice(); // копируем стейт
		newArray[idQuest].check = Number(idAnswer);
		this.setState(newArray);

		// получаем коллекцию всех ответов по вопросу idQuest
		const elems = ev.target.parentNode.parentNode.childNodes;

		// сбрасываем классы подсветки для всех элементов коллекции
		for(var i=0; i<elems.length; i++){
			elems[i].classList.remove("rightly");
			elems[i].classList.remove("wrongly");
		}

		// добавляем классы подсветки для активного ответа
		if(this.state.test[idQuest].check === this.state.test[idQuest].right){
			ev.target.parentNode.classList.add("rightly");
		}else ev.target.parentNode.classList.add("wrongly");
	}

	render(){
		
		const css = {textAlign: 'left'};
		const tests = this.state.test.map((item, idx)=>{
			return (
				<div key={idx} style={css} id={idx}>
					<h4>{item.question}</h4>
			{
			item.answers.map((answerItem, index)=>{
				return (
					<div key={index}
						className="custom-control custom-radio">
						<input 
							type="radio"
							id={idx+"."+index}
							value={index}
							checked={this.state.test[idx].check === index}
							onChange={this.handleRadioChange}
							className="custom-control-input"/>
						<label htmlFor={idx+"."+index} 
							className="custom-control-label">
							{answerItem}
						</label>
					</div>	
				)
			})
			}
				</div>
			);
		});

		return(
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						{tests}
					</div>
				</div>
			</div>
		);
	}
}

export default Tasks;
