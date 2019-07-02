import React, {Component} from 'react';
/*
	4-2.Дан следующий стейт:

this.state = {name: 'Иван', age: 25};
Дана кнопка (результат работы метода render):

<div>
	<button>Нажми на меня</button>
</div>
Сделайте так, чтобы по нажатию на кнопку результат работы метода render изменился на следующее ('Иван' и 25 должны взяться из стейта):

<div>
	<p>имя: Иван, возраст: 25</p>
	<button>Нажми на меня</button>
</div>
*/

export default class Tasks extends Component{

	state = {name: 'User', age: 25 };

	showMessage(){
		this.setState({show: true})
	}

	render(){
		if(this.state.show) var message = <p>name: {this.state.name}, age: {this.state.age}</p>;
		
		return (
			<div>
				<button onClick={this.showMessage.bind(this)}>ClickMe</button>
				{message}
			</div>
			
		);
	}
}