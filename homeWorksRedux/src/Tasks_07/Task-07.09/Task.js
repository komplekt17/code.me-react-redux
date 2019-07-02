import React from 'react';
/*
	7-9. Дан селект с двумя значениями: 'отмечено' и 'не отмечено'. Дан также чекбокс. Сделайте так, чтобы при изменении значения селекта, чекбокс менял свое состояние с 'отмечено' на 'не отмечено' и наоброт.
*/

const Task = ({ storeFromApp, addSelectValue }) => {

    return (
        <form className="form">
			<div className="form-check">
				<input
					className="form-check-input"  
					id="Check"
					type="checkbox"
					checked={storeFromApp.valueSelect }
					onChange={()=>addSelectValue(!storeFromApp.valueSelect)}/>
				<label className="form-check-label" forhtml="Check">
					Status: {storeFromApp.valueSelect ? ' Checked' : ' unChecked'}
				</label>
			</div>
			<select
				className="form-control" 
				name="" id=""
				onChange={(ev)=>addSelectValue((ev.target.value === 'true'))}>
				<option value="true">Checked</option>
				<option value="false">not Checked</option>
			</select>
		</form>
    );
}

export default Task;