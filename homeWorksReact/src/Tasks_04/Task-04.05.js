import React, {Component} from 'react';
/*
	4-5. Пусть в стейте дан массив имен ['Коля', 'Вася', 'Петя']. Выведите каждый элемент этого массива в отдельной <li> в списке ul. Вот так:

<ul>
	<li>Коля</li>
	<li>Вася</li>
	<li>Петя</li>
</ul> 
*/

class Tasks extends Component {

	state = {
		name: ['Nicolay', 'Vasily', 'Peter']
	}

	render(){
		const list = this.state.name.map((item, index)=>{
			return <li key={index}>{item}</li>
		});
		return <ul>{list}</ul>;
	}
}

export default Tasks;