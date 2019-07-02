import React, {Component} from 'react';
/*
	5-3. Переделайте предыдущую задачу так, чтобы появилась кнопочка, по нажатию на которую каждый раз будет исчезать последняя li из списка (каждый раз по одной, пока li в списке не закончатся).
*/

class Tasks extends Component {

	state = {
		names: ['Коля', 'Вася', 'Петя', 'Иван', 'Дима']
	};

	delItem(){
		const li = this.state.names.pop()
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
				<button onClick={this.delItem.bind(this)}>deleteItem</button>
			</div>
		);
	}
}

export default Tasks;