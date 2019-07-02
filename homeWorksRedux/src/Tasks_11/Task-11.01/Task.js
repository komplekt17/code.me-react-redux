import React from 'react';
/*
	11-01. Дан массив с работниками. У каждого работника есть имя, фамилия, количество отработанных дней и зарплатная ставка за день. Выведите этих работников на экран в виде таблицы. Сделайте так, чтобы в последней колонке автоматически рассчитывалась зарплата работника (количество отработанных дней умножить на ставку). Сделайте так, чтобы количество дней и ставка выводились в виде инпутов. Если поредактировать эти инпуты - зарплата также должна поменяться. Под таблицей также выведите суммарную зарплату всех работников.
*/

const Task = ({storeFromApp, handlerInput}) => {
	let summ = 0;
	const table = storeFromApp.workers.map((item, index)=>{
		summ += item.salary*item.days;
		return (
			<tr key={index} id={index}>
				<td>{item.name}</td>
				<td>{item.surname}</td>
				<td>
					<input
						value={item.salary}
						onChange={(ev)=>{
							handlerInput(index, ev.target.name, ev.target.value)}}
						size='5'
						name="salary"
						type="number"/>
				</td>
				<td>
					<input 
						value={item.days}
						onChange={(ev)=>{
							handlerInput(index, ev.target.name, ev.target.value)}}
						size='5'
						name="days"
						type="number"/>
				</td>
				<td>{parseFloat(item.salary*item.days).toFixed(2)}</td>
			</tr>
		);
	});
	return(
		<div className="container">
			<div className="row">
				<div className="col-md-6">
					<p>Total salary: {parseFloat(summ).toFixed(2)}</p>
					<table className="table table-striped">
						<thead>
							<tr>
								<th scope="col">Name</th>
								<th scope="col">Surname</th>
								<th scope="col">Koeff</th>
								<th scope="col">Work Days</th>
								<th scope="col">Salary</th>
							</tr>
						</thead>
						<tbody>
							{table}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default Task;