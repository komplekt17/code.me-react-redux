import React, {Component} from 'react';
/*
	4-3.Переделайте предыдущую задачу так, чтобы по первому нажатию на кнопку абзац с нашим текстом показывался, а по второму нажатию - скрывался.
*/

export default class Tasks extends Component{

	state = {name: 'User', age: 25, show: false};

	toggleMessage(){
		this.setState({show: !this.state.show})
	}

	render(){
		if(this.state.show) var message = <p>name: {this.state.name}, age: {this.state.age}</p>;
		
		return (
			<div>
				<button onClick={this.toggleMessage.bind(this)}>ClickMe</button>
				{message}
			</div>
			
		);
	}
}