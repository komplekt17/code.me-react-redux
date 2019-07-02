import React from 'react';
/*
	7-8. Дан селект со списком CSS цветов. Дан абзац. Сделайте так, чтобы при смене цвета абзац красился в выбранный цвет.
*/
const Task = ({ storeFromApp, addSelectValue }) => {

    const options = storeFromApp.colors.map((item, index) => {
        return <option key={index} value={index}>{item}</option>
    });
    let textColor = { color: storeFromApp.colors[storeFromApp.valueSelect] };
    return (
        <form className="form">
			<p>Selected color:{" "}
				<span style={textColor}>
					{storeFromApp.colors[storeFromApp.valueSelect]}
				</span>
			</p>
		    <label forhtml="ControlSelect">Select color</label>
			<select
				onChange={(ev)=>addSelectValue(ev.target.value)}
		    	className="form-control" id="ControlSelect">
				{options}
			</select>
		</form>
    );
}

export default Task;