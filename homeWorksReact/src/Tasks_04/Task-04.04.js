import React, {Component} from 'react';
/*
	4-4. Переделайте предыдущую задачу так, чтобы по заходу на страницу текст кнопки был 'показать', а после нажатия на нее - 'скрыть' (ну и так далее - по каждому нажатию текст должен чередоваться). 
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
				<button onClick={this.toggleMessage.bind(this)}>
					{this.state.show ? 'hideMe' : 'showMe'}
				</button>
				{message}
			</div>
			
		);
	}
}