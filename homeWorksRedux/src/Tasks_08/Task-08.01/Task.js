import React from 'react';
/*
	8-01. Дан массив. Выведите элементы этого массива в виде списка ul. Сделайте так, чтобы внутри каждой li был чекбокс, по нажатию на который содержимое чекбокса будет перечеркиваться.
*/

const Task = ({storeFromApp, addSelectValue}) => {

	const {cities} = storeFromApp;

	const list = cities.map((item, index)=>{

		return (
			<li key={index} className="list-item">
				<input 
					className="form-check-input" 
					onChange={(ev)=>{
						ev.target.nextSibling.classList.toggle('done');
					}}
					type="checkbox"/> 
				<label name={index} className="form-check-label">
					{item}
				</label>
			</li>
		);
	});

	return(
		<ul className="list-unstyled">{list}</ul>
	);
}

export default Task;