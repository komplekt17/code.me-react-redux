import React, {Component} from 'react';
/*
	7-11. Дан инпут, кнопка и селект. Сделайте следующее: в инпут вводится какая-то строка и по нажатию на кнопку эта строка должна добавится в конец селекта в виде нового option.
*/

class Tasks extends Component {

	state= {
		options: ['Base selector'],
		checked: 0,
		textInp: ''
	}

	handleSelect = (ev) => {
		this.setState({checked: ev.target.value});
	}

	handleInput = (event) => {
		this.setState({textInp: event.target.value});
	}

	addSelector = () => {
		if(this.state.textInp !== ''){
			this.state.options.push(this.state.textInp);
			this.setState({
				textInp: '', 
				checked: this.state.options.length-1});
		}
		else alert('You must complete this input');
	}

	render(){
		const list = this.state.options.map((item, index)=>{
			return <option key={index} value={index}>{item}</option>
		});
		return(
			<div>
				<p>{this.state.options[this.state.checked]}</p>
				<select 
					name="" id=""
					value={this.state.checked}
					onChange={this.handleSelect}>
					{list}
				</select><br/>
				<input 
					type="text"
					value={this.state.textInp}
					onChange={this.handleInput}
					/><br/>
				<button onClick={this.addSelector}>Add Selector</button>
			</div>
		);
	}
	
}

export default Tasks;