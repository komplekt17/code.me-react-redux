import React, { Component } from "react";
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

class Tasks extends Component {
  	state = {
	    users: [
		    {firstName: 'Bob', surname: 'Meljanski', age: 40},
			{firstName: 'Michel', surname: 'Hensson', age: 20},
			{firstName: 'Jane', surname: 'Mitchel', age: 54},
			{firstName: 'Rebeka', surname: 'Wotson', age: 44},
			{firstName: 'Max', surname: 'Payton', age: 39}
	    ]
  	}

	handlerClick = (ev) => {
		// находим самого верхнего соседа
		const node = ev.target.nextSibling.nextSibling;
		// скрываем или показываем элемент input
		node.classList.toggle("done-3");
	}

	handlerHide = (ev) => {
		// скрываем элемент при потери курсора мыши
	ev.target.classList.toggle("done-3");
	}

	handlerInput = (ev) => {

		// получаем индекс элемента tr
		const attrId = Number(ev.target.parentNode.parentNode.getAttribute("id"));
		// получаем значение атрибута name
		const attrName = ev.target.previousSibling.previousSibling.getAttribute("name")
		//console.log(attrId, attrName);

		if(attrName === 'firstName'){
			const newArray = this.state.users.slice(); // копируем стейт
		    newArray[attrId].firstName = ev.target.value; // изменяем свойство
		    this.setState(newArray); // возвращаем стейт
		}

		if(attrName === 'surname'){
			const newArray = this.state.users.slice();
		    newArray[attrId].surname = ev.target.value;
		    this.setState(newArray);
		}

		if(attrName === 'age'){
			const newArray = this.state.users.slice();
		    newArray[attrId].age = ev.target.value;
		    this.setState(newArray);
		}
	};

  	render(){
  		const style = {fontWeight: 'bold', color: 'lightblue'}
		const tableList = this.state.users.map((item, index)=>{
			return <tr key={index} id={index}>
						<td>
							<span name="firstName" onClick={this.handlerClick}>
								{item.firstName}
							</span><br/>
							<input
								value={this.state.users[index].firstName}
								type="text"
								className="done-3"
								onMouseOut={this.handlerHide}
								onChange={this.handlerInput} />
						</td>
						<td>
							<span name="surname" onClick={this.handlerClick}>
								{item.surname}
							</span><br/>
							<input
								value={this.state.users[index].surname}
								type="text"
								className="done-3"
								onMouseOut={this.handlerHide}
								onChange={this.handlerInput} />
						</td>
						<td>
							<span name="age" onClick={this.handlerClick}>
								{item.age}
							</span><br/>
							<input
								value={this.state.users[index].age}
								type="text"
								className="done-3"
								onMouseOut={this.handlerHide}
								onChange={this.handlerInput} />
						</td>
					</tr>
		})
		return(
			<div>
				<table className="table">
					<thead>
						<tr style={style}>
							<td>Name</td>
							<td>Surname</td>
							<td>Age</td>
						</tr>
					</thead>
					<tbody>
						{tableList}
					</tbody>
				</table>
			</div>
		);
	}
}

export default Tasks;
