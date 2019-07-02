import React from 'react';
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

const Task = ({storeFromApp, addSelectValue}) => {

	const list = storeFromApp.users.map((item, index)=>{
		return(
			<li className="list-item" key={index}>
				<div className="form-check">
					<input type="checkbox" className="form-check-input" 
						id="checkbox" onChange={(ev)=>{
							ev.target.nextSibling.lastChild.classList.toggle('done-3');
						}}/>
					<label forhtml="checkbox" className="form-check-label">
						<span> {item.name} </span>
						<span className="done-3">{item.surname}: {item.age} age</span>
					</label>
				</div>
			</li>
		);
	});

	return(
		<div className="form">
			<ul className="list-unstyled">
				{list}
			</ul>
		</div>
	);
}

export default Task;