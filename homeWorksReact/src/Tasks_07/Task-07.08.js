import React, {Component} from 'react';
/*
	7-8. Дан селект со списком CSS цветов. Дан абзац. Сделайте так, чтобы при смене цвета абзац красился в выбранный цвет.
*/

class Tasks extends Component {

	state = {
		valueSelect: 0,
		colors: ['white', 'yellow', 'lightblue', 'grey', 'green', 'tomato', 'red', 'orange']
	}

	handleSelect = (ev) => {
		this.setState({valueSelect: ev.target.value});
	}

	render(){
		let textColor = {color: this.state.colors[this.state.valueSelect]};
		const color = this.state.colors.map((item, index) => {
			return <option key={index} value={index}>{item}</option>
		});
		return(
			<div>
				<p>Select color:</p>
				<select 
					name="" id=""
					value={this.state.valueSelect} 
					onChange={this.handleSelect}
					>
					{color}
				</select>
				<p style={textColor}>{this.state.colors[this.state.valueSelect]}</p>
			</div>
		)
	}
	
}

export default Tasks;