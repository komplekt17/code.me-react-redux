import React, {Component} from 'react';
/*
	8-04. Дан массив с юзерами:

	this.state = {
		users: [
			{name: 'Коля', surname: 'Иванов', age: 30},
			{name: 'Вася', surname: 'Петров', age: 40},
			{name: 'Петя', surname: 'Сидоров', age: 50},
		]
	};
	Выведите элементы этого массива в виде списка ul. Имя, фамилия и возраст каждого юзера должны стоять в одной li через пробел. Внутри каждой li сделайте чекбокс. Если чекбокс не отмечен, то в li должно быть только имя юзера, а если отмечен - имя, фамилия и возраст.

*/

class Tasks extends Component {

	state = {
		users: [
			{name: 'Коля', surname: 'Иванов', age: 30},
			{name: 'Вася', surname: 'Петров', age: 40},
			{name: 'Петя', surname: 'Сидоров', age: 50},
		]
	}

	handlerBox = (ev) => {
		const node = ev.target.nextSibling.nextSibling;
		node.classList.toggle('done-3');
		//console.log(node);
	}
	
	render(){
		const list = this.state.users.map((item, index)=>{
			return(
				<li className="list-group-item" key={index}>
					<input type="checkbox" onChange={this.handlerBox}/>
					<span> {item.name} </span>
					<span className="done-3">{item.surname}: {item.age} лет</span>
				</li>
			);
		});
		return(
			<ul className="list-unstyled">
				{list}
			</ul>
		);
	}
}

export default Tasks;