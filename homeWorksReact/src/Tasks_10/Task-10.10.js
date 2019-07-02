import React, { Component } from "react";
import TaskComponent from './dopComponents/TaskComponent-10.10'
/*
	9-07. Пусть в стейте хранится массив с продуктами. У каждого продукта есть название, цена и количество. Выведите все продукты на экран в виде таблицы. Сделайте так, чтобы в таблице была колонка, в которой выводится полная стоимость продукта (цена умножить на количество).

	Пусть отображением продукта на экран занимается отдельный компонент. Сделайте так, чтобы рядом с каждым продуктом была кнопка 'удалить', с помощью которой можно удалить этот продукт из таблицы.

	9-08. Модифицируйте предыдущую задачу так, чтобы появился еще и один отдельный компонент для добавления нового продукта в таблицу.

	9-09. Модифицируйте предыдущую задачу так, чтобы под таблицей появился еще и один отдельный компонент, в котором будет выведена полная стоимость всех продуктов.

	9-10. Модифицируйте предыдущую задачу так, чтобы в таблице появилась еще одна колонка, в которой будут находиться чекбоксы. Изначально эти чекбоксы отмечены. Сделайте так, чтобы полная стоимость всех продуктов выводилась только для тех продуктов, у которых чекбокс отмечен.
*/

class Tasks extends Component {

	state = {
		fruits: [
			{name: 'apple', price: 3.1, quantity: 22, checked: false},
			{name: 'cucumber', price: 4.2, quantity: 17, checked: false},
			{name: 'carrot', price: 2.9, quantity: 15, checked: false},
			{name: 'banana', price: 4.5, quantity: 23, checked: false},
			{name: 'ananas', price: 5.1, quantity: 4, checked: false},
			{name: 'orange', price: 3.6, quantity: 15, checked: false},
		],
		input1: '',
		input2: '',
		input3: '',
	}

	deleteFruit= (idx) => {
		const arr = this.state.fruits.slice();
		arr.splice(idx, 1);
		this.setState({fruits: arr});
	}

	handlerCheckbox = (ev) => {
		const arr = this.state.fruits.slice();
		// заменяем свойство .checked на обратное
		arr[ev.target.id].checked = !this.state.fruits[ev.target.id].checked;
		this.setState(arr);
	}

	handlerInput = (event) => {
		const nameElem = event.target.getAttribute('name');
		if(nameElem === 'input1'){
			this.setState({input1: event.target.value});
		}
		if(nameElem === 'input2'){
			this.setState({input2: event.target.value});
		}
		if(nameElem === 'input3'){
			this.setState({input3: event.target.value});
		}
	} 

	addItem = (ev) => {
		ev.preventDefault();
		if(
			this.state.input1 !== '' && 
			this.state.input2 !== '' && 
			this.state.input3 !== ''){
				// создаём объект
				const obj = {
					name: this.state.input1, 
					price: Number(this.state.input2), 
					quantity: Number(this.state.input3), 
					checked: false
				}
				 const arr = this.state.fruits.slice();
				 arr.push(obj);

				 this.setState({
				 	fruits: arr, 
				 	input1: '',
				 	input2: '',
				 	input3: ''});

		}else alert('You must enter all fields');
	}

	render(){
		const {fruits, input1, input2, input3} = this.state;
		return(
			<TaskComponent 
				fruits={fruits} 
				deleteFruit={this.deleteFruit}
				handlerCheckbox={this.handlerCheckbox}
				handlerInput={this.handlerInput}
				addItem={this.addItem}
				input1={input1}
				input2={input2}
				input3={input3}/>
		);
	}
}

export default Tasks;
