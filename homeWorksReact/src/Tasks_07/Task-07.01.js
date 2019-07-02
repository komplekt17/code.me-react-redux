import React, {Component} from 'react';
/*
	7-1. Дан текстареа и абзац. Сделайте так, чтобы при наборе текста в текстареа он автоматически появлялся в этом абзаце.
*/

class Tasks extends Component {

	state = {
		text: ''
	}

	repeatText = (e) => {
		this.setState({text: e.target.value});
	}

	render(){
		return(
			<div>
				<p>{this.state.text}</p>
				<textarea 
					value={this.state.text} name="" id=""
					onChange={this.repeatText} 
					cols="30" rows="10">
				</textarea>
			</div>
		);
	}
	
}

export default Tasks;