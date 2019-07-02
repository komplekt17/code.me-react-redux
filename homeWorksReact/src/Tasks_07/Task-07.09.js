import React, {Component} from 'react';
/*
	7-9. Дан селект с двумя значениями: 'отмечено' и 'не отмечено'. Дан также чекбокс. Сделайте так, чтобы при изменении значения селекта, чекбокс менял свое состояние с 'отмечено' на 'не отмечено' и наоброт.
*/

class Tasks extends Component {

	state= {
		checked: false
	}

	handleSelect = (ev) => {
		if(ev.target.value === '1') this.setState({checked: false});
		else this.setState({checked: true});
		//console.log(this.state.checked);
	}

	handleCheckbox = () => {
		
	}
	render(){
		return(
			<div>
				<input 
					type="checkbox"
					checked={this.state.checked}
					onChange={this.handleCheckbox}
					/><br/>
				<select 
					name="" id=""
					value={this.state.checked ? '0':'1'}
					onChange={this.handleSelect}>
					<option key={0} value="0">Checked</option>
					<option key={1} value="1">not Checked</option>
				</select><br/>
				<p>Status: {this.state.checked ? 'Checked' : 'unChecked'}</p>
			</div>
		);
	}
	
}

export default Tasks;