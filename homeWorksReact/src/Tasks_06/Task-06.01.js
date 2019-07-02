import React, {Component} from 'react';
/*
	6-1. Дан инпут и абзац. Сделайте так, чтобы при наборе текста в инпуте он автоматически появлялся в этом абзаце.
*/

class Tasks extends Component {

	state = {text: ''}

	changeValue(e){
		this.setState({text: e.target.value})
	}

	render(){
		return(
			<div>
				<p>{this.state.text}</p>
				<input onChange={this.changeValue.bind(this)}/>
			</div>
		);
	}
	
}

export default Tasks;