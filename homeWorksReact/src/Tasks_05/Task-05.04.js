import React, {Component} from 'react';
/*
	5-4. Переделайте предыдущую задачу так, чтобы рядом с каждым именем появилась кнопочка, по нажатию на которую li с этим именем будет удаляться.
*/

class Tasks extends Component {

	state = {
		names: ['Коля', 'Вася', 'Петя', 'Иван', 'Дима']
	};

	delItem(idx){
		const newArray = this.state.names.splice(idx, 1)
		this.setState({newArray});
	}

	render(){
		const list = this.state.names.map((item, index)=>{
			return (
				<li key={index}>
					{item}
					<button onClick={this.delItem.bind(this, index)}>
						X
					</button>
				</li>
			);
		});

		return (
			<ul>
				{list}
			</ul>
		);
	}
}

export default Tasks;