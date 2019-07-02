import React from 'react';
/*
	8-14. Дан селект. Изначально он пустой. Дан инпут и кнопка. В этот инпут вводится название города. По нажатию на кнопку этот город должен попасть в селект. Пользователь нашего скрипта добавляет несколько городов в селект, затем выбирает один из добавленных городов - и этот город должен отобразиться на экране в каком-нибудь абзаце.
*/

const Task = ({ storeFromApp, addSelectValue, addSortingItem }) => {

	const { cities, input, selectedCity } = storeFromApp;

	const css = {textAlign: 'left'}
	console.log(storeFromApp)

	const options = cities.map((item, index)=>{
		return <option key={index} value={index}>{item}</option>
	});
	
	return(
		<div className="container">
			<div className="row">
				<div className="col-md-6">
					<form onSubmit={(event)=>event.preventDefault()}> 
						<div className="form-group">
							<div className="input-group">
								<input 
									value={input}
									onChange={(ev)=>addSelectValue(
										ev.target.value, ev.target.name)}
									name="input" type="text"/>
				  				<div className="input-group-append">
									<button 
										onClick={()=>{
											if(input !== '') addSortingItem(input);
											else alert('Enter city in input')}}
										className="btn btn-primary">
										Add city
									</button>
								</div>
							</div>
						</div>
						<div className="form-group">
							<select 
								value={selectedCity} 
								onChange={(ev)=>addSelectValue(
									ev.target.value, ev.target.name)}
								name="select"
								className="form-control">
								<option value="city">Select city...</option>
								{cities.length !== 0 ? options : ''}
							</select>
						</div>
					<p style={css}>
						Your select:{" "} 
						{selectedCity === '' ? '' : cities[selectedCity]}
					</p>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Task;