import React, { Component } from "react";
import TaskComponent from './dopComponents/TaskComponent-10.07'
/*
	9-07.  Пусть в стейте хранится массив с продуктами. У каждого продукта есть название, цена и количество. Выведите все продукты на экран в виде таблицы. Сделайте так, чтобы в таблице была колонка, в которой выводится полная стоимость продукта (цена умножить на количество).

	Пусть отображением продукта на экран занимается отдельный компонент. Сделайте так, чтобы рядом с каждым продуктом была кнопка 'удалить', с помощью которой можно удалить этот продукт из таблицы.
*/

class Tasks extends Component {

	state = {
		fruits: [
			{name: 'apple', price: 3.1, quantity: 22},
			{name: 'cucumber', price: 4.2, quantity: 17},
			{name: 'carrot', price: 2.9, quantity: 15},
			{name: 'banana', price: 4.5, quantity: 23},
			{name: 'ananas', price: 5.1, quantity: 4},
			{name: 'orange', price: 3.6, quantity: 15},
		]
	}

	deleteFruit= (idx) => {
		const arr = this.state.fruits.slice();
		arr.splice(idx, 1);
		this.setState({fruits: arr});
	}

	render(){
		const {fruits} = this.state;
		return(
			<TaskComponent fruits={fruits} deleteFruit={this.deleteFruit}/>
		);
	}
}

export default Tasks;
