import React from 'react';
/*
	8-12. Дан массив с работниками. У каждого работника есть имя, фамилия, зарплата, пол. Выведите этих работников на экран в виде таблицы. Под таблицей сделайте форму, с помощью которой в таблицу можно будет добавить нового работника. В этой форме имя, фамилия, зарплата будут инпутами, а пол - селектом, в котором можно будет выбрать один из двух вариантов.
*/

const Task = ({storeFromApp, addSelectValue, saveWorker}) => {

	const { workers, fields } = storeFromApp;

	const { 
		inputName, 
		inputSurname, 
		inputSalary,
		option } = fields;

	const tableList = workers.map((item, index)=>{
		return (
			<tr key={index}>
				<td>{item.name}</td>
				<td>{item.surname}</td>
				<td>{item.salary}</td>
				<td>{item.sex}</td>
			</tr>
		)
	});

	const style = {fontWeight: 'bold', color: 'tomato'}

	return(
		<div className="container">
			<div className="row">
				<form className="col-md-6 notes" onSubmit={(ev)=>ev.preventDefault()}>
					<div className="form-group">
						<label>Name</label>
						<input
							name="firstName"
							value={inputName}
							onChange={(ev)=>addSelectValue(ev.target.value, ev.target.name)}
							type="text" 
							className="form-control"/>
					</div>
					<div className="form-group">
						<label>Surname</label>
						<input 
							name="surname"
							value={inputSurname}
							onChange={(ev)=>addSelectValue(ev.target.value, ev.target.name)} 
							type="text" 
							className="form-control"/>
					</div>
					<div className="form-group">
						<label>Salary</label>
						<input 
							name="salary" 
							value={inputSalary} 
							onChange={(ev)=>addSelectValue(ev.target.value, ev.target.name)}
							type="number" 
							className="form-control"/>
						</div>
						<div className="input-group">
						<select name="option"
							className="custom-select"
							value={option}
							onChange={(ev)=>addSelectValue(ev.target.value, ev.target.name)}>
							<option value="sex">Your sex</option>
							<option value="male">male</option>
							<option value="female">female</option>
						</select>
  						<div className="input-group-append">
							<button 
								onClick={()=>{
									if(
										inputName !== '' && 
										inputSurname !== '' && 
										inputSalary !== '' &&
										option !== '' && 
										option !== 'sex'){
											saveWorker(
												inputName, 
												inputSurname, 
												inputSalary,
												option);
									}else alert('Complete all fields');
								}}
								type="button" 
								className="btn btn-outline-success">
								Add worker
							</button>
						</div>
					</div>
				</form>
				<div className="col-md-6">
					<table className="table">
						<thead style={style}>
							<tr>
								<td>Name</td>
								<td>Surname</td>
								<td>Salary</td>
								<td>Sex</td>
							</tr>
						</thead>
						<tbody>
							{tableList}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default Task;