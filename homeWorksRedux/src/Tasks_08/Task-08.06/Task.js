import React from 'react';
/*
	8-06. Дан следующий массив:

	this.state = {
		users: [
			{name: 'Коля', age: 30},
			{name: 'Вася', age: 40},
			{name: 'Петя', age: 50},
		]
	};
	Выведите его на экран в виде таблицы:

	<table>
		<tr>
			<td>Коля</td><td>30</td>
		</tr>
		<tr>
			<td>Вася</td><td>40</td>
		</tr>
		<tr>
			<td>Петя</td><td>50</td>
		</tr>
	</table>

	Сделайте так, чтобы внутри каждой td была кнопка 'редактировать', по нажатию на которую текст этой td можно будет поредактировать с помощью появившегося в ней инпута.
*/

const Task = ({storeFromApp, addSelectValue}) => {

	const {users} = storeFromApp;

	const style = {fontWeight: 'bold', color: 'lightblue'}

	const tableList = users.map((item, index)=>{
		return (
			<tr key={index} id={index}>
				<td>
					<label forhtml="firstName" onClick={(ev)=>{
						ev.target.classList.toggle("done-3");
						ev.target.nextSibling.classList.toggle("done-3");
					}}>
						{item.firstName}
					</label>
					<input 
						name="firstName"
						value={users[index].firstName}
						type="text"
						size="1"
						className="form-control form-control-sm done-3"
						onChange={(ev)=>{
							let firstName = ev.target.getAttribute('name');
							addSelectValue(ev.target.value, index, firstName)}}
	        			onMouseOut={(ev)=>{
							ev.target.classList.toggle('done-3');
							ev.target.previousSibling.classList.toggle("done-3");
	        			}}/>
				</td>
				<td>
					<label forhtml="surname" onClick={(ev)=>{
						ev.target.classList.toggle("done-3");
						ev.target.nextSibling.classList.toggle("done-3");
					}}>
						{item.surname}
					</label>
					<input
						name="surname"
						value={users[index].surname}
						type="text"
						size="3"
						className="form-control form-control-sm done-3"
						onChange={(ev)=>{
							let surname = ev.target.getAttribute('name');
							addSelectValue(ev.target.value, index, surname)}}
	        			onMouseOut={(ev)=>{
							ev.target.classList.toggle('done-3');
							ev.target.previousSibling.classList.toggle("done-3");
	        			}}/>
				</td>
				<td>
					<label forhtml="age" onClick={(ev)=>{
						ev.target.classList.toggle("done-3");
						ev.target.nextSibling.classList.toggle("done-3");
					}}>
						{item.age}
					</label>
					<input
						name="age"
						value={users[index].age}
						type="text"
						size="1"
						className="form-control form-control-sm done-3"
						onChange={(ev)=>{
							let age = ev.target.getAttribute('name');
							addSelectValue(ev.target.value, index, age)}}
	        			onMouseOut={(ev)=>{
							ev.target.classList.toggle('done-3');
							ev.target.previousSibling.classList.toggle("done-3");
	        			}}/>
				</td>
			</tr>
		)
	})
	return(
		<div className="form">
			<table className="table table-bordered table-hover">
				<thead>
					<tr style={style}>
						<th scope="col">Name</th>
						<th scope="col">Surname</th>
						<th scope="col">User's Age</th>
					</tr>
				</thead>
				<tbody>
					{tableList}
				</tbody>
			</table>
		</div>
	);
}

export default Task;