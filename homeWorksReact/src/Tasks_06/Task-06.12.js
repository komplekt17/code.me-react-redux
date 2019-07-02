import React, {Component} from 'react';
/*
	6-12.  Дан следующий массив:

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
		<td>Коля</td><td>40</td>
	</tr>
	<tr>
		<td>Коля</td><td>50</td>
	</tr>
</table>
Сделайте 2 инпута и кнопку, по нажатию на которую в список добавится новая tr с именем и возрастом.

*/

class Tasks extends Component {
	
	state = {
		users: [
			{name: 'John', age: 30},
			{name: 'Michel', age: 40},
			{name: 'Piter', age: 50},
		],
		inpText1: '',
		inpText2: ''
	}

	textInp1 = (event) => {
		this.setState({inpText1: event.target.value})
	}

	textInp2 = (event) => {
		this.setState({inpText2: event.target.value})
	}

	setData = () => {
		if(this.state.inpText1 !== '' && this.state.inpText2 !== ''){
			this.state.users.push({
				name: this.state.inpText1, 
				age: this.state.inpText2})
			this.setState({
				inpText1: '',
				inpText2: ''
			});
		}
		else{
			alert('You must insert data')
		}
	}

	render(){

	  	const css = {
		    border: "1px solid red",
		    padding: "10px 20px"
	  	};
		const list = this.state.users.map((item, index) => {
			return(
				<tbody key={index}>
					<tr>
						<td>{item.name}</td>
						<td>{item.age}</td>
					</tr>
				</tbody>
			);
		});
		return (
			<div>
				<table style={css}>
					<thead>
						<tr>
							<td>Name</td>
							<td>Age</td>
						</tr>
					</thead>
					{list}
				</table>
				<input value={this.state.inpText1} onChange={this.textInp1} type="text"/><br/>
				<input value={this.state.inpText2} onChange={this.textInp2} type="text"/><br/>
				<button onClick={this.setData}>Enter data</button>
			</div>
			
		);
	}
}

export default Tasks