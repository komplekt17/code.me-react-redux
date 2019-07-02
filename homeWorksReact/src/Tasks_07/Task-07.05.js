import React, {Component} from 'react';
/*
	7-5. Модифицируйте предыдущую задачу так, чтобы список городов хранился в массиве из стейта.
*/

class Tasks extends Component {

	state = {
		value: 0,
		cities: ['Moscow', 'New York', 'Paris', 'London', 'Berlin', 'Mumbay']
	}

	handleSelect = (ev) => {
		this.setState({value: ev.target.value});
	}

	render(){ 
		const city = this.state.cities.map((item, index)=>{
			return <option key={index} value={index}>{item}</option>
		});
		return(
			<form>
				<p>Your choice: {this.state.cities[this.state.value]}</p>
				<select 
					value={this.state.value} 
					onChange={this.handleSelect}
				>
					{city}
				</select>
			</form>
		);
	}
	
}

export default Tasks;