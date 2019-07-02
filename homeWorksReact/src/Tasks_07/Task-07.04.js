import React, {Component} from 'react';
/*
	7-4. Дан селект со списком городов (просто селект в HTML коде, option не из массива). Дан также абзац, в который выводится выбранный город. Сделайте так, чтобы при смене города в селекте в абзаце он также менялся.
*/

class Tasks extends Component {

	state = {
		value: ""
	}

	handleSelect = (ev) => {
		this.setState({value: ev.target.value});
	}

	render(){ 
		return(
			<form>
				<p>Your choice:<br/>{" "}{this.state.value}</p>
				<select 
					value={this.state.value} 
					onChange={this.handleSelect}>
					<option id="" value="Moscow">Moscow</option>
					<option id="" value="New York">New York</option>
					<option id="" value="Paris">Paris</option>
					<option id="" value="London">London</option>
					<option id="" value="Berlin">Berlin</option>
				</select>
			</form>
		);
	}
	
}

export default Tasks;