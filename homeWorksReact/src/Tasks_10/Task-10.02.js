import React, { Component } from "react";
import TaskComponent from './dopComponents/TaskComponent-10.02'
/*
	9-02.  Модифицируйте предыдущую задачу. Пусть у компонента-родителя есть метод showMessage, который алертом выводит '!'. Передайте этот метод в компонент-потомок. В таблице с юзерами сделайте еще одну колонку со ссылками. Привяжите к клику по этим ссылкам переданный метод.

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

	showMessage = () => {
		return alert('hello !');
	}

	render(){
		const { users } = this.state
		return(
			<TaskComponent users={users} showMessage={this.showMessage}/>
		);
	}
}

export default Tasks;
