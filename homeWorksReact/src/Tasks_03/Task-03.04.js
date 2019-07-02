import React from 'react';
/*
	3-4.Дан следующий стейт:

this.state = {name: 'Иван', age: 25};
Изначально метод render выводит на экран следующее:

<div>
	имя: Иван, возраст: 25
</div>
Сделайте кнопочку, по нажатию на которую 'Иван' поменяется на 'Коля', а 25 поменяется на 30
*/


class Tasks extends React.Component {

	state = {name: 'Иван', age: 25};

	changeName(){
		this.setState({name: 'Коля', age: 30});
	}

	render(){
	  	return(
	  		<div>
		  		<p>имя: {this.state.name}, возраст: {this.state.age}</p>
		  		<button onClick={this.changeName.bind(this)}>ClickMe!</button>
		  	</div>	
		); 	
	}

}

export default Tasks;