import React, {Component} from 'react';
/*
	7-6. Даны 3 радиокнопочки со значениями 1, 2 и 3. Дан абзац. Сделайте так, чтобы значение выбранной радиокнопочки выводилось в этот абзац.
*/

class Tasks extends Component {

	state = {
		option: 'yellow'
	}

	handleSelect = (ev) => {
		this.setState({option: ev.target.value});
	}

	render(){ 
		return(
			<form>
				<p>Your choice: {this.state.option}</p>
				<input type="radio"
					value='red'
					checked={this.state.option === 'red'}
					onChange={this.handleSelect}/>red<br/>
				<input type="radio"
					value='yellow'
					checked={this.state.option === 'yellow'} 
					onChange={this.handleSelect}/>yellow<br/>
				<input type="radio"
					value='green'
					checked={this.state.option === 'green'}  
					onChange={this.handleSelect}/>green<br/>
			</form>
		);
	}
	
}

export default Tasks;