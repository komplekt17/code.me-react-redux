import React, { Component } from "react";
/*
	8-14. Дан селект. Изначально он пустой. Дан инпут и кнопка. В этот инпут вводится название города. По нажатию на кнопку этот город должен попасть в селект. Пользователь нашего скрипта добавляет несколько городов в селект, затем выбирает один из добавленных городов - и этот город должен отобразиться на экране в каком-нибудь абзаце.

*/

class Tasks extends Component {

	state = {
		cities: [],
		input: '',
		select: ''
	}

	handlerValue = (event) => {
		const nameElem = event.target.getAttribute('name');
		if(nameElem === 'input'){
			this.setState({input: event.target.value});
		}
		if(nameElem === 'select'){
			this.setState({select: event.target.value});
			//console.log(this.state.select);
		}
	}

	handleClick = (event) => {
		event.preventDefault();
		if(this.state.input !== ''){
			this.state.cities.push(this.state.input);
			this.setState({input: ''});
		}else alert('Enter city in input');
		//console.log(this.state.cities);
	}

	render(){
		const css = {textAlign: 'left'}
		let selected;
		const options = this.state.cities.map((item, index)=>{
			return <option key={index} value={index}>{item}</option>
		});

		if(this.state.select === ''){
			selected = '';
		}
		else {
			selected = this.state.cities[this.state.select];
		}
		return(
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<form> 
							<div className="form-group">
								<div className="input-group">
									<input 
										value={this.state.input}
										onChange={this.handlerValue}
										name="input" type="text"/>
					  				<div className="input-group-append">
										<button 
											onClick={this.handleClick}
											className="btn btn-primary">
											Add city
										</button>
									</div>
								</div>
							</div>
							<div className="form-group">
								<select 
									value={this.state.select} 
									onChange={this.handlerValue}
									name="select"
									className="form-control">
									<option value="city">Select city...</option>
									{this.state.cities.length !== 0 ?options :''}
								</select>
							</div>
						<p style={css}>Your select: {selected}</p>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Tasks;
