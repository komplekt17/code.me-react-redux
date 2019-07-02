import React, {Component} from 'react';
/*
	5-1. Пусть в стейте дан массив имен ['Коля', 'Вася', 'Петя', 'Иван', 'Дима']. Выведите каждый элемент этого массива в отдельной <li> в списке ul.
*/

class Tasks extends Component {

	state = {
		names: ['Коля', 'Вася', 'Петя', 'Иван', 'Дима']
	};

	render(){
		const list = this.state.names.map((item, index)=>{
			return <li key={index}>{item}</li>
		});

		return <ul>{list}</ul>
	}
}

export default Tasks;