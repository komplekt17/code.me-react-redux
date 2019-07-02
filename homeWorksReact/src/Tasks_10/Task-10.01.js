import React, { Component } from "react";
import TaskComponent from './dopComponents/TaskComponent-10.01'
/*
	9-01.  Пусть в стейте хранится массив с юзерами. У каждого юзера есть имя, фамилия и возраст. Выведите всех юзеров на экран с помощью цикла. Сделайте так, чтобы отображением юзера на экран занимался отдельный компонент.

*/

class Tasks extends Component {

	state = {
		users: [
			{name: 'Bob', surname: 'Meljanski', age: 51},
			{name: 'Michel', surname: 'Hensson', age: 54},
			{name: 'Jane', surname: 'Mitchel', age: 20},
			{name: 'Rebeka', surname: 'Wotson', age: 44},
			{name: 'Max', surname: 'Payton', age: 39}
		]
	}

	render(){
		const { users } = this.state
		return(
			<TaskComponent users={users}/>
		);
	}
}

export default Tasks;
