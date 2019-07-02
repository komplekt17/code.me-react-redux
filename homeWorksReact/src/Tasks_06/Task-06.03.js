import React, {Component} from 'react';
/*
	6-3. Дан инпут и абзац. В инпут вводится возраст пользователя. Сделайте так, чтобы при наборе текста в абзаце автоматически появлялся год рождения пользователя.
*/

class Tasks extends Component {

	state = {age: ''}

	changeValue(e){
		const age = (new Date()).getFullYear() - parseInt(e.target.value);
		this.setState({age: age})
	}

	render(){
		return(
			<div>
				<p>Your birth year: {this.state.age}</p>
				<label>Enter your age:</label><br/>
				<input onChange={this.changeValue.bind(this)}/>
			</div>
		);
	}
	
}

export default Tasks;