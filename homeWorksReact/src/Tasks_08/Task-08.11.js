import React, { Component } from "react";
/*
	8-11. Дан инпут. В него вводится строка. Сделайте так, чтобы если длина введенной строки от 4 до 9 символов - граница инпута была зеленой, в противном случае - красной. Инпут должен проверять свое содержимое по мере ввода.

*/

class Tasks extends Component {

	state = {
		textInput: ''
	}

	handlerInput = (ev) => {
		this.setState({textInput: ev.target.value});
		console.log(this.state.textInput);
	}

	render(){
		var cssForm = '';
		var str = this.state.textInput;
		if(str.length === 0) cssForm = 'form-control';
		if(str.length > 0 && (str.length < 4 || str.length > 9)){
			cssForm = 'form-control is-invalid';
		} 
		if(str.length > 3 && str.length < 10){
			cssForm = 'form-control is-valid';
		}
		
		return(
			<form  >
				<div className="form-group">
					<input 
						type="text" 
						className={cssForm}
						value={this.state.textInput}
						onChange={this.handlerInput} />
					<div className="invalid-feedback">
			          	is not correct: {this.state.textInput.length} symbols
			        </div>
					<div className="valid-feedback">
			          	is correct: {this.state.textInput.length} symbols
			        </div>

				</div>
			</form>
		);
	}
}

export default Tasks;
