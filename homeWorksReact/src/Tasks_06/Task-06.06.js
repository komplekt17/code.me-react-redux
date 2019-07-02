import React, {Component} from 'react';
/*
	6-6.  Даны два инпута и кнопка. В инпуты вводятся числа. Сделайте так, чтобы по нажатию на кнопку под инпутами в какой-нибудь абзац вывелась сумма этих чисел.
*/

class Tasks extends Component {

	state = {
		textNum1: '',
		textNum2: '',
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
	
	calcResult = (event) => {
		event.preventDefault();
		const result = parseInt(this.state.textNum1) + parseInt(this.state.textNum2);
		this.setState({summ: result, textNum1: '', textNum2: ''});
	}

	render(){
		return(
			<div>
				<p>Result: {this.state.summ}</p>
				<form onSubmit={this.calcResult}>
					<input value={this.state.textNum1} onChange={this.changeInput1} type="text"/><br/>
					<input value={this.state.textNum2} onChange={this.changeInput2} type="text"/><br/>
					<button>Calculate</button>
				</form>
			</div>
		);
	}
	
}

export default Tasks;