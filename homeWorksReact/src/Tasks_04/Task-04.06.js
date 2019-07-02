import React, {Component} from 'react';
/*
	4-6. Переделайте предыдущую задачу так, чтобы в каждой li кроме элемента массива еще и стоял его порядковый номер в массиве. Вот так:

<ul>
	<li>Коля - 1</li>
	<li>Вася - 2</li>
	<li>Петя - 3</li>
</ul>
*/

class Tasks extends Component {

	state = {
		name: ['Nicolay', 'Vasily', 'Peter']
	}

	render(){
		const list = this.state.name.map((item, index)=>{
			return <li key={index}>{item} - {index+1}</li>
		});
		return <ul>{list}</ul>;
	}
}

export default Tasks;