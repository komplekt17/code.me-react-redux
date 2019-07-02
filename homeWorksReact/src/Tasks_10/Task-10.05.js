import React, { Component } from "react";
import TaskComponent from './dopComponents/TaskComponent-10.05'
/*
	9-05.  Модифицируйте предыдущую задачу. Поменяйте showMessage на deleteUser и сделайте так, чтобы по клику на ссылку юзер удалялся из таблицы.
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

	deleteUser = (idx) => {
		const arr = this.state.users.slice();
		arr.splice(idx, 1);
		this.setState({users: arr});
	}

	render(){
		const { users } = this.state
		return(
			<TaskComponent users={users} deleteUser={this.deleteUser}/>
		);
	}
}

export default Tasks;
