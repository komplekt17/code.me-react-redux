import React from 'react';
/*
	8-02. Дан массив с работниками. У каждого работника есть имя, фамилия и зарплата. Выведите этих работников на экран в виде таблицы. Для каждого работника сделайте чекбокс, который изначально будет отмечен. Под таблицей выведите сумму зарплат тех работников, для которых чекбокс отмечен.
*/

const Task = ({storeFromApp, addSelectValue}) => {

	const {workers, summ} = storeFromApp

	const tableList = workers.map((item, index)=>{
		return (
			<tr key={index}>
				<td>{item.name}</td>
				<td>{item.surname}</td>
				<td>{item.salary}</td>
				<td>
					<input
						type="checkbox"
						onChange={(ev)=>{
							ev.target.parentNode.parentNode.classList.toggle('done-1');
							if(ev.target.parentNode.parentNode.classList.contains('done-1')){
								addSelectValue(summ+item.salary)
							}
							else addSelectValue(summ-item.salary)}} /> 
				</td>
			</tr>
		)
	});

	return(
		<div>
			<table className="table">
				<thead className="rightly">
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
			<p>Salary sum: ${summ}</p>
		</div>
	);
}

export default Task;