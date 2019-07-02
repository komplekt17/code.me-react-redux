import React, {Component} from 'react';
/*
	8-02. Дан массив с работниками. У каждого работника есть имя, фамилия и зарплата. Выведите этих работников на экран в виде таблицы. Для каждого работника сделайте чекбокс, который изначально будет отмечен. Под таблицей выведите сумму зарплат тех работников, для которых чекбокс отмечен.
*/

class Tasks extends Component {

	state = {
		workers: [
			{name: 'Bob', surname: 'Meljanski', salary: 5140},
			{name: 'Michel', surname: 'Hensson', salary: 5420},
			{name: 'Jane', surname: 'Mitchel', salary: 2054},
			{name: 'Rebeka', surname: 'Wotson', salary: 4470},
			{name: 'Max', surname: 'Payton', salary: 3920}
		],
		summ: 0
	}

	handlerBox = (ev) => {
		const tdNode = ev.target.parentNode.previousSibling;
		tdNode.classList.toggle('done-1');
		const workSalary = parseInt(tdNode.innerHTML);

		if(tdNode.classList.contains('done-1')){
			//console.log(ev.target);
			this.setState({summ: this.state.summ+workSalary})
		} else{
			this.setState({summ: this.state.summ-workSalary})
		}
	}
	
	render(){
		const tableList = this.state.workers.map((item, index)=>{
			return <tr key={index}>
						<td>{item.name}</td>
						<td>{item.surname}</td>
						<td>{item.salary}</td>
						<td><input onChange={this.handlerBox} type="checkbox"/></td>
					</tr>
		})
		return(
			<div>
				<table className="table">
					<thead>
						<tr>
							<td>Name</td>
							<td>Surname</td>
							<td>Salary</td>
              				<td>Check</td>
						</tr>
					</thead>
					<tbody>
						{tableList}
					</tbody>
				</table>
				<p>Salary sum: ${this.state.summ}</p>
			</div>
		);
	}
}

export default Tasks;