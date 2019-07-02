import React, {Component} from 'react';
/*
	7-12. Дан чекбокс и инпут. Сделайте так, чтобы если чекбокс не отмечен - то инпут находится в заблокированном состоянии (через disabled, а если отмечен - то в незаблокированном.
*/

class Tasks extends Component {

	state= {
		checked: false
	}

	handlerCheckbox = () => {
		this.setState({checked: !this.state.checked});
	}

	render(){
		return(
			<div>
				<input 
					type="checkbox" 
					value={this.state.checked}
					onChange={this.handlerCheckbox}/>
				<label htmlFor="">I agree</label><br/>
				{this.state.checked ? 
					<input type="text" /> : 
					<input type="text" disabled/>}
				<p>Status: {this.state.checked ? 'true' : 'false'}</p>
			</div>
		);
	}
	
}

export default Tasks;