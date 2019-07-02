import React from 'react';
/*
	8-09. Дан массив с работниками. У каждого работника есть имя, фамилия, зарплата. Выведите этих работников на экран в виде таблицы. Сделайте так, чтобы работников можно было посортировать по любой колонке этой таблицы.
*/

const Task = ({storeFromApp, addSelectValue, selectSorting}) => {

	const {workers, typeSort, option, classNames} = storeFromApp;

	let {cls_Name, cls_Surname, cls_Salary} = classNames;
	
	const tableList = workers.map((item, index)=>{
		return <tr key={index}>
					<td>{item.name}</td>
					<td>{item.surname}</td>
					<td>{item.salary}</td>
				</tr>
	});

	const options = typeSort.map((item, index)=>{
		return <option key={index} value={index}>{item}</option>
	});

	return(
		<div>
			<table className="table">
				<thead>
					<tr>
						<td>Name{" "}<i className={cls_Name} /></td>
						<td>Surname{" "}<i className={cls_Surname} /></td>
						<td>Salary{" "}<i className={cls_Salary} /></td>
					</tr>
				</thead>
				<tbody>
					{tableList}
				</tbody>
			</table>
			<div className="input-group">
				<select
					className=""
					value={option}
					onChange={(ev)=>addSelectValue(ev.target.value)}>
					{options}
				</select>
			  	<div className="input-group-append">
				    <button 
						type="button"
						className="btn btn-outline-info btn-sm"
						onClick={()=>{
							selectSorting(option)}}>
						Sort
					</button>
			  	</div>
			</div>
		</div>
	);
}

export default Task;