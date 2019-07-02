import React, { Component } from "react";
/*
	8-15. Реализуйте калькулятор валют. Как он работает: дан инпут, в который вводится сумма и даны два селекта - в первом выбирается из какой валюты, а во втором - в какую. Дана также кнопка. По нажатию на эту кнопку в абзац должна вывестись сумма в выбранной валюте.

*/

class Tasks extends Component {

	state = {
		courses: [
			{name: 'United States Dollar', currency: 'USD', coust: 1},
			{name: 'Euro', currency: 'EUR', coust: 0.89},
			{name: 'Russian Ruble', currency: 'RUR', coust: 64.47},
			{name: 'Japanese Yen', currency: 'YEN', coust: 109.15},
			{name: 'Chinese Yuan', currency: 'CHY', coust: 6.88},
			{name: 'Canadian Dollar', currency: 'CAD', coust: 1.35},
		],
		input: '',
		select1: '',
		select2: '',
		result: ''
	}

	handlerValue = (event) => {
		const nameElem = event.target.getAttribute('name');
		if(nameElem === 'input'){
			this.setState({input: event.target.value});
		}
		if(nameElem === 'select1'){
			this.setState({select1: event.target.value});
		}
		if(nameElem === 'select2'){
			this.setState({select2: event.target.value});
		}

	}

	handleClick = (event) => {
		event.preventDefault();
		if(this.state.select1 === 'curr' || this.state.select2 === 'curr'){
			alert('You must select currency')
		}else{
			if(this.state.input !== ''){
				const inpVal = this.state.input;
				const coust1 = this.state.courses[this.state.select1].coust;
				const coust2 = this.state.courses[this.state.select2].coust;
				const result = "You will receive: " + 
				parseFloat(inpVal/coust1*coust2).toFixed(2) + " " + 
				this.state.courses[this.state.select2].currency;

				this.setState({input: '', result: result});
			}else alert('Enter volume in input');
		}
	}

	render(){
		const css = {textAlign: 'left'}
		const selects = this.state.courses.map((item, index)=>{
			return <option key={index} value={index}>
					{item.currency}, {item.name} 
				</option>
		});

		return(
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<form>
							<div className="form-group">
								<select 
									value={this.state.select1} 
									onChange={this.handlerValue}
									name="select1"
									className="form-control">
									<option value="curr">
										Select currency you'll give...
									</option>
									{selects}
								</select>
							</div>
							<div className="form-group">
								<select 
									value={this.state.select2} 
									onChange={this.handlerValue}
									name="select2"
									className="form-control">
									<option value="curr">
										Select currency you'll get...
									</option>
									{selects}
								</select>
							</div>
							<div className="form-group">
								<div className="input-group">
									<input 
										value={this.state.input}
										onChange={this.handlerValue}
										name="input" type="number"/>
					  				<div className="input-group-append">
										<button 
											onClick={this.handleClick}
											className="btn btn-success">
											Get course
										</button>
									</div>
								</div>
							</div>
							<p style={css}>{this.state.result}</p>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Tasks;
