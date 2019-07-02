import React, {Component} from 'react';
/*
	6-7.  Даны 3 инпута и кнопка. В инпуты вводится имя, фамилия и отчество. Сделайте так, чтобы по нажатию на кнопку под инпутами в какой-нибудь абзац вывелось полное ФИО пользователя.
*/

class Tasks extends Component {

	state = {
		textNum1: '',
		textNum2: '',
		textNum3: '',
		summ: ''
	}

	changeInput1 = (event) => {
		const num1 = event.target.value;
		this.setState({textNum1: num1});
	}

	changeInput2 = (event) => {
		const num2 = event.target.value;
		this.setState({textNum2: num2});
	}

	changeInput3 = (event) => {
		const num3 = event.target.value;
		this.setState({textNum3: num3});
	}
	
	calcResult = (event) => {
		event.preventDefault();
		const result = `${this.state.textNum1} ${this.state.textNum2}  ${this.state.textNum3}`;
		this.setState({summ: result, textNum1: '', textNum2: '', textNum3: ''});
	}

	render(){
		return(
			<div>
				<p>Result: {this.state.summ}</p>
				<form onSubmit={this.calcResult}>
					<label htmlFor="">Surname</label><br/>
					<input value={this.state.textNum1} onChange={this.changeInput1} type="text"/><br/>
					<label htmlFor="">First Name</label><br/>
					<input value={this.state.textNum2} onChange={this.changeInput2} type="text"/><br/>
					<label htmlFor="">Second Name</label><br/>
					<input value={this.state.textNum3} onChange={this.changeInput3} type="text"/><br/>
					<button>Calculate</button>
				</form>
			</div>
		);
	}
	
}

export default Tasks;