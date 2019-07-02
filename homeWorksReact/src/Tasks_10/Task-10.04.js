import React, { Component } from "react";
import TaskComponent from './dopComponents/TaskComponent-10.04'
/*
	9-04.  Модифицируйте предыдущую задачу. Пусть теперь showMessage параметром принимает строку и выводит ее на экран. Сделайте так, чтобы по клику на ссылку выводилось имя соответствующего юзера.

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

	showMessage = (idx, name) => {
		return alert('hello '+name+'! your number is '+ idx);
	}

	render(){
		const { users } = this.state
		return(
			<TaskComponent users={users} showMessage={this.showMessage}/>
		);
	}
}

export default Tasks;
