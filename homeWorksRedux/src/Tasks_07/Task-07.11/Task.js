import React from 'react';
/*
	7-11. Дан инпут, кнопка и селект. Сделайте следующее: в инпут вводится какая-то строка и по нажатию на кнопку эта строка должна добавится в конец селекта в виде нового option.
*/
const Task = ({ storeFromApp, addSelectValue, addInputValue, addInputArray }) => {

	let {options, valueSelect, textInp} = storeFromApp;

    const list = options.map((item, index)=>{
			return <option key={index} value={index}>{item}</option>
		});
		return(
			<form className="form" onSubmit={(ev)=>ev.preventDefault()}>
  				<div className="form-group"> 
    				<label forhtml="ControlSelect">
    					Selected item:{" "}{options[valueSelect]}
					</label>
					<select
						className="form-control"
						onChange={(ev)=>addSelectValue(Number(ev.target.value))}
						name="" id="ControlSelect">
						{list}
					</select>
				</div>
  				<div className="form-group">
    				<label forhtml="ControlInput">Enter select option</label>
					<input className="form-control" 
						type="text"
						onChange={(ev)=>addInputValue(ev.target.value)}
						id="ControlInput"/>
				</div>
				<button 
					onClick={()=>{
						addInputArray(textInp);
						//console.log(valueSelect);
						document.getElementById('ControlInput').value = '';
					}} 
					className="btn btn-info btn-block">
					Add Selector
				</button>
			</form>
		);
}

export default Task;