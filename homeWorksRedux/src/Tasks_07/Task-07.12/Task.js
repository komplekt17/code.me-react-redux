import React from 'react';
/*
	7-12. Дан чекбокс и инпут. Сделайте так, чтобы если чекбокс не отмечен - то инпут находится в заблокированном состоянии (через disabled, а если отмечен - то в незаблокированном.
*/
const Task = ({storeFromApp, addSelectValue}) => {

	const {valueSelect} = storeFromApp;

    return (
    	<form className="form">
  			<div className="form-check">
				<input  
					className="form-check-input"
					type="checkbox" id="ControlInput"
					checked={valueSelect}
					onChange={()=>addSelectValue(!valueSelect)}/>
				<label forhtml="ControlInput" className="form-check-label">
					I agree
				</label>
  			</div>
  			<div className="form-group">
				{valueSelect ? 
					<input className="form-control" type="text" /> : 
					<input className="form-control" type="text" disabled/>}
  			</div>
		</form>
    );
}

export default Task;