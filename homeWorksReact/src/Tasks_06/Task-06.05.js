import React, {Component} from 'react';
/*
	6-5.  Дан инпут и кнопка submit. В инпут вводится текст. Сделайте так, чтобы по нажатию на кнопку этот текст вывелся в какой-нибудь абзац.
*/

class Tasks extends Component {

	state = {
		label: '',
		text: ''
	}

	getText = (event) => {
		this.setState({label: event.target.value});
	}

	getSubmit = (event) => {
		event.preventDefault();
		this.setState({text: this.state.label, label: ''});
	}

	render(){
		return(
			<div>
				<p>{this.state.text}</p>
				<form onSubmit={this.getSubmit}>
					<input value={this.state.label} onChange={this.getText} type="text"/>
					<input type="submit"/>
				</form>
			</div>
		);
	}
	
}

export default Tasks;