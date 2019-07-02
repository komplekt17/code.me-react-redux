import React, {Component} from 'react';
/*
	6-2. Модифицируйте предыдущую задачу так, чтобы текст в абзац выводился в верхнем регистре.
*/

class Tasks extends Component {

	state = {text: ''}

	changeValue(e){
		this.setState({text: e.target.value})
	}

	render(){
		return(
			<div>
				<p>{this.state.text.toUpperCase()}</p>
				<input onChange={this.changeValue.bind(this)}/>
			</div>
		);
	}
	
}

export default Tasks;