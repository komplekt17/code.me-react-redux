import React, {Component} from 'react';
/*
	5-2. Переделайте предыдущую задачу так, чтобы под списком появилась кнопочка, по нажатию на которую в конец списка будет добавляться элемент с текстом 'пункт'.
*/

class Tasks extends Component {

	state = {
		names: ['Коля', 'Вася', 'Петя', 'Иван', 'Дима']
	};

	addItem(){
		const li = this.state.names.push("new List Item")
		this.setState({li});
	}

	render(){
		const list = this.state.names.map((item, index)=>{
			return <li key={index}>{item}</li>
		});

		return (
			<div>
				<ul>
					{list}
				</ul>
				<button onClick={this.addItem.bind(this)}>addListItem</button>
			</div>
		);
	}
}

export default Tasks;