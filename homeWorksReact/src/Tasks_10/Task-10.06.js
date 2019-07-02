import React, { Component } from "react";
import TaskComponent from './dopComponents/TaskComponent-10.06'
/*
	9-06.  Дан массив. Выведите его элементы в виде списка ul. Сделайте так, чтобы элементы массива выводились в отдельном компоненте. Рядом с текстом li сделайте ссылку 'редактировать'. По нажатию на эту ссылку она должна, а взамен должен появиться инпут, с помощью которого можно будет поредактировать текст li. По потери фокуса из инпута он должен исчезнуть, а взамен должна вернуться ссылка 'редактировать'.
*/

class Tasks extends Component {

	state = {
		users: [
			'name: Bob, surname: Meljanski, age: 51',
			'name: Michel, surname: Hensson, age: 54',
			'name: Jane, surname: Mitchel, age: 20',
			'name: Rebeka, surname: Wotson, age: 44',
			'name: Max, surname: Payton, age: 39'
		], 
		input: ''
	}

	editUser = (ev) => {
		const item = this.state.users[ev.target.id];
		this.setState({input: item});

		// скрываем кликнутый элемент
		const elem = ev.target;
		elem.classList.toggle('done-3');

		// подсвечиваем li
		elem.parentNode.classList.add('active')

		// открываем input
		elem.nextSibling.classList.toggle('done-3');
	}

	handlerInput = (ev) =>{
		this.setState({input: ev.target.value})
	}

	handlerFocus = (ev) =>{
		const arr = this.state.users.slice();
		const idx = ev.target.getAttribute('name');
		arr[idx] = ev.target.value;
		this.setState({users: arr});

		// скрываем input
		const elem = ev.target;
		elem.classList.toggle('done-3');

		// и показываем editMe
		elem.previousSibling.classList.toggle('done-3');

		// убираем подсветку li
		elem.parentNode.classList.remove('active')
	}

	render(){
		const { users, input } = this.state
		return(
			<TaskComponent 
				value={input}
				users={users} 
				editUser={this.editUser}
				handlerInput={this.handlerInput}
				handlerFocus={this.handlerFocus}
				/>
		);
	}
}

export default Tasks;
