import React, {Component} from 'react';
/*
	6-8.  Дан массив с именами пользователей. Выведите этот массив в виде списка ul. Также даны инпут и кнопка. Сделайте так, чтобы в инпут можно было ввести еще одно имя, нажать на кнопку - и это имя добавилось в конец списка ul.
*/

class Tasks extends Component {

	state = {
		names: ['John', 'Bob', 'Nikolas', 'Jane'],
		text: ''
	}

	addItem = (event) => {
		this.setState({text: event.target.value})
		
	}

	resetInput = () => {
		if(this.state.text === ''){
			alert('Enter your name');
		}
		else{
			this.state.names.push(this.state.text)
			this.setState({text: ''})
		}
	}


	render(){
		const list = this.state.names.map((item, index)=>{
			return <li key={index}>{item}</li>
		});
		return(
			<div>
				<ul>
					{list}
				</ul>
				<input 
					value={this.state.text} 
					onChange={this.addItem} 
					type="text" 
					placeholder="Your name"/>
				<button onClick={this.resetInput}>Add Item</button>
			</div>
		);
	}

	
	
}

export default Tasks;