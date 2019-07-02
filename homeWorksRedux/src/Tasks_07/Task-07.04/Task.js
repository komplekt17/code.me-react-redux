import React from 'react';
/*
	7-4. Дан селект со списком городов (просто селект в HTML коде, option не из массива). Дан также абзац, в который выводится выбранный город. Сделайте так, чтобы при смене города в селекте в абзаце он также менялся.
*/
const Task = ({ storeFromApp, addSelectValue }) => {
    return (
        <form className="form">
        	<p>Selected city:{" "}{storeFromApp.valueSelect}</p>
		  	<div className="form-group">
			    <label forhtml="ControlSelect">Select city</label>
			    <select 
			    	onChange={(ev)=>addSelectValue(ev.target.value)}
			    	className="form-control" id="ControlSelect">
			      	<option value="Moscow">Moscow</option>
					<option value="New York">New York</option>
					<option value="Paris">Paris</option>
					<option value="London">London</option>
					<option value="Berlin">Berlin</option>
			    </select>
		  	</div>
		</form>
    );
}

export default Task;