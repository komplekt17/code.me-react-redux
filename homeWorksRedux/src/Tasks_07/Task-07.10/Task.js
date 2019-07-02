import React from 'react';
/*
	7-10. Дан селект и 3 абзаца. В селекте можно выбрать один из трех пунктов. Сделайте так, чтобы в зависимости от выбора на экране был виден один из трех абзацев.
*/
const Task = ({ storeFromApp, addSelectValue }) => {

    const list = storeFromApp.texts.map((item, index) => {
        return <option key={index} value={index}>Text-{index+1}</option>
    });
    return (
        <form className="form">
			<select
				className="form-control"  
				name="" id=""
				onChange={(ev)=>addSelectValue(ev.target.value)}>
				{list}
			</select>
			<p>Choiced text:<br/> {storeFromApp.texts[storeFromApp.valueSelect]}</p>
		</form>
    );
}

export default Task;