import React, { Component } from "react";
/*
	8-10. Даны два селекта. С помощью первого селекта можно выбрать язык пользователя (русский или английский). Если в первом селекте выбран русский язык, то во втором селекте должен появится список дней недели по-русски. А если в первом селекте выбран английский - то и во втором дни недели будут по-английски.

*/

class Tasks extends Component {

	state = {
		en: [
			'monday', 
			'tuesday', 
			'wednesday', 
			'thursday', 
			'friday', 
			'saturday', 
			'sunday'],
		ru: [
			'понедельник', 
			'вторник',  
			'среда', 
			'четверг', 
			'пятница',  
			'суббота', 
			'воскресенье'],
		option: 'ru'
	}

	handlerSelect = (ev) => {
		this.setState({option: ev.target.value})
		//console.log(this.state.option);
	}

	render(){
		var options;
		if(this.state.option === 'ru'){
			options = this.state.ru.map((item, index)=>{
				return <option key={index} value={index}>{item}</option>
			});
		}else{
			options = this.state.en.map((item, index)=>{
				return <option key={index} value={index}>{item}</option>
			});
		}
		return(
			<div className="container">
				<div className="row">
					<div className="input-group col-md-5">
						<select
							className="custom-select"
							value={this.state.option}
							onChange={this.handlerSelect}>
							<option value="ru">Russian</option>
							<option value="en">English</option>
						</select>
					</div>
					<div className="input-group col-md-5">
						<select
							className="custom-select">
							{options}
						</select>
					</div>
				</div>
			</div>
		);
	}
}

export default Tasks;
