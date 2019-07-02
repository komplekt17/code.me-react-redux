import React from 'react';
/*
	8-03. Дан массив. Выведите каждый элемент этого массива в отдельном абзаце. Сделайте так, чтобы над каждым абзацем был чекбокс, со следующим поведением: если он отмечен - абзац под ним есть на экране, а если не отмечен - абзаца нет. По умолчанию пусть все чекбоксы отмечены.
*/

const Task = ({storeFromApp, addSelectValue}) => {

	const {cities} = storeFromApp;

	const list = cities.map((item, index)=>{
		return(
			<div key={index} className="form-check notes">
				<input 
					type="checkbox" id={index}
					className="form-check-input"
					checked={item.checked}
					onChange={(ev)=>{
						addSelectValue(index);
						ev.target.nextSibling.classList.toggle('done-3');
					}}/>
				<label
					className="form-check-label">
					{item.city}-
				</label>
				<label 
					className="form-check-label">
					{item.country}
				</label>
			</div>
		);
	});
	return(
		<form className="form">
			{list}
		</form>
	);
}

export default Task;