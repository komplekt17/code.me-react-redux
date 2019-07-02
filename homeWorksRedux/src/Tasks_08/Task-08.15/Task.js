import React from 'react';
/*
	8-15. Реализуйте калькулятор валют. Как он работает: дан инпут, в который вводится сумма и даны два селекта - в первом выбирается из какой валюты, а во втором - в какую. Дана также кнопка. По нажатию на эту кнопку в абзац должна вывестись сумма в выбранной валюте.
	https://www.cbr-xml-daily.ru/daily_json.js
*/

const Task = ({storeFromApp, addSelectValue, getCulcVolume, getCourses}) => {

	const {
		PreviousURL, 
		Valute, 
		selectFrom, 
		selectTo, 
		inputSize, 
		culcVolume, 
		loading, loaded, error} = storeFromApp;

	const css = {textAlign: 'left'}

	let selects = Object.values(Valute).map((item, index)=>{
			return (
				<option key={index} value={index}>
					{item.CharCode} 
				</option>
			)
		});
	
	//console.log(Object.values(Valute));
	const tables = Object.values(Valute).map((item, index)=>{
		return (
			<tr key={index}>
				<td>{index+1}</td>
				<td>{item.CharCode}</td>
				<td>{item.ID}</td>
				<td>{item.Nominal}</td>
				<td>{item.Name}</td>
				<td>{item.NumCode}</td>
				<td>{parseFloat(item.Previous).toFixed(2)}</td>
				<td>{parseFloat(item.Value).toFixed(2)} </td>
			</tr>
		)
	});

	return(
		<div className="container">
		{loaded ? <p>Base RUB, source{" "}{PreviousURL}</p> : ''}
			<div className="row">
				<div className="col-4">
					<form onSubmit={(ev)=>ev.preventDefault()}>
						<div className="form-group">
							<select 
								value={selectFrom} 
								onChange={(ev)=>addSelectValue(ev.target.value, ev.target.name)}
								name="selectFrom"
								className="form-control">
								<option value='start'>
									Select currency you'll give...
								</option>
								{selects}
							</select>
						</div>
						<div className="form-group">
							<select 
								value={selectTo} 
								onChange={(ev)=>addSelectValue(ev.target.value, ev.target.name)}
								name="selectTo"
								className="form-control">
								<option value='start'>
									Select currency you'll get...
								</option>
								 {selects}
							</select>
						</div>
						<div className="form-group">
							<div className="input-group">
								<input 
									value={inputSize}
									onChange={(ev)=>{
										addSelectValue(ev.target.value, ev.target.name)}}
									name="input" type="number"/>
				  				<div className="input-group-append">
									<button
										onClick={()=>{
											if(selectFrom !== 'start' && 
												selectTo !== 'start' && 
												inputSize !== '') getCulcVolume(selectFrom, selectTo, inputSize);
											else alert('Enter all fields')}}
										className="btn btn-outline-success">
										Get course
									</button>
								</div>
							</div>
						</div>
						<p style={css}>{" "}{culcVolume}</p>
					</form>
					{loaded ? '' :
					(<button 
						className="btn btn-outline-warning" 
						onClick={()=>getCourses()}>
						Get More Courses
					</button>)}
				
				</div>
				<div className="col-8">
					<table className="table">
						<thead>
							<tr>
								<th>#</th>
								<th>Char</th>
								<th>ID</th>
								<th>Nominal</th>
								<th>Name</th>
								<th>Code</th>
								<th>Previous</th>
								<th>Value</th>
							</tr>
						</thead>
						<tbody>
							{tables}
						</tbody>
					</table>
					{loading ? <i className="loading fa fa-spinner fa-spin fa-lg"></i> :''}
					{error === null ? '': <p>Server connect error</p>}
				</div>
			</div>
		</div>
	);
}

export default Task;