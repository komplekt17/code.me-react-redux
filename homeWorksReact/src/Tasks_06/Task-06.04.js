import React, {Component} from 'react';
/*
	6-4. Дан инпут и 3 абзаца. В инпут вводится ФИО пользователя через пробел. Сделайте так, чтобы при наборе текста в первом абзаце появилась фамилия пользователя, во втором - имя, а в третьем - отчество.
*/

class Tasks extends Component {

	state = {
		firstName: '',
		secondName: '',
		surname: ''
	}

	changeValue(e){

		const string = e.target.value;
		const array = string.split(' ');
		this.setState({
			firstName: array[1],
			secondName: array[2],
			surname: array[0]})
		//console.log(array[0], array[1], array[2]);
	}
	

	render(){
		return(
			<div>
				<p>Your Surname: {this.state.surname}</p>
				<p>Your Name: {this.state.firstName}</p>
				<p>Your Second Name: {this.state.secondName}</p>
				<input onChange={this.changeValue.bind(this)}/>
			</div>
		);
	}
	
}

export default Tasks;