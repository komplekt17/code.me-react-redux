import React from 'react';
/*
	4-1.Дан следующий стейт:

this.state = {show: true, name: 'Иван'};
Изначально результат работы метода render следующий ('Иван' берется из this.state.name):

<div>
	<p>Привет, Иван!</p>
</div>
Сделайте так, чтобы если this.state.show был равен true, то выводился текст 'Привет, Иван', а если равен false - то 'Пока, Иван'.
*/

class Tasks extends React.Component {

	state = {name: 'User', show: true}

	render(){
		if(this.state.show) return <p>Hello, {this.state.name}</p>;
		else return <p>Buy, {this.state.name}</p>; 

	}
}
export default Tasks;