import React from 'react';
/*
	8-10. Даны два селекта. С помощью первого селекта можно выбрать язык пользователя (русский или английский). Если в первом селекте выбран русский язык, то во втором селекте должен появится список дней недели по-русски. А если в первом селекте выбран английский - то и во втором дни недели будут по-английски.
*/

const Task = ({storeFromApp, addSelectValue}) => {

	const {ru, en, option} = storeFromApp;
	
	const options_ru = ru.map((item, index)=>{
		return <option key={index} value={index}>{item}</option>
	});

	const options_en = en.map((item, index)=>{
		return <option key={index} value={index}>{item}</option>
	});

	return(
		<div className="container">
			<div className="row">
				<div className="input-group col-md-5">
					<select
						className="custom-select"
						value={option}
						onChange={(ev)=>addSelectValue(ev.target.value)}>
						<option value="ru">Russian</option>
						<option value="en">English</option>
					</select>
				</div>
				<div className="input-group col-md-5">
					<select
						className="custom-select">
						{option === 'ru' ? options_ru : options_en}
					</select>
				</div>
			</div>
		</div>
	);
}

export default Task;