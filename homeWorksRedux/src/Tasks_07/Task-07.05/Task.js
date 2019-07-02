import React from 'react';
/*
	7-5. Модифицируйте предыдущую задачу так, чтобы список городов хранился в массиве из стейта.
*/
const Task = ({ storeFromApp, addSelectValue }) => {

    const city = storeFromApp.cities.map((item, index) => {
        return <option key={index} value={index}>{item}</option>
    });
    //console.log(storeFromApp);
    return (
        <form className="form">
			<p>Selected city:{" "}{storeFromApp.cities[storeFromApp.valueSelect]}</p>
		    <label forhtml="ControlSelect">Select city</label>
			<select
				onChange={(ev)=>addSelectValue(ev.target.value)}
		    	className="form-control" id="ControlSelect">
				{city}
			</select>
		</form>
    );
}

export default Task;