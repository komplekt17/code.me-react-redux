import React, {Component} from 'react';
/*
	7-2. Дан чекбокс и абзац. Сделайте так, чтобы состояние чекбокса выводилось в этот абзац.
*/

class Tasks extends Component {

	state = {
		checked: false
	}

	handleCheckbox = (ev) => {
		this.setState({checked: !this.state.checked});
	}

	render(){
		var css = {};
		if(this.state.checked) css = {color: 'lightgreen'}
		else css = {color: 'red'}
		return(
			<div className="form-check form-check-inline">
				<input 
					id="input" className="form-check-input"
					checked={this.state.checked} 
					onChange={this.handleCheckbox} 
					type="checkbox"/> 
				<label className="form-check-label">
					State checkbox:{" "} 
					{
						this.state.checked ?
						<span style={css}>on switched</span> : 
						<span style={css}>off switched</span>
					}
				</label>
			</div>
		)
	}
	
}

export default Tasks;