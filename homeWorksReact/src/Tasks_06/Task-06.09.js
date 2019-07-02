import React, {Component} from 'react';
/*
	6-9.  Модифицируйте предыдущую задачу так, чтобы в конце каждой li появилась кнопка для удаления этого пункта списка.
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

	delItem = (idx) => {
		const newArray = this.state.names.splice(idx, 1)
		this.setState({newArray});
	}

	render(){
		const list = this.state.names.map((item, index)=>{
			return <li key={index}>{item}
					<button onClick={()=>{this.delItem(index)}}>
						Delete
					</button>
				</li>
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