import React from 'react';
/*
	8-11. Дан инпут. В него вводится строка. Сделайте так, чтобы если длина введенной строки от 4 до 9 символов - граница инпута была зеленой, в противном случае - красной. Инпут должен проверять свое содержимое по мере ввода.
*/

const Task = ({storeFromApp, addSelectValue}) => {
	
	var cssForm = '';
	var str = storeFromApp.textInput;
	if(str.length === 0) cssForm = 'form-control';
	if(str.length > 0 && (str.length < 4 || str.length > 9)){
		cssForm = 'form-control is-invalid';
	} 
	if(str.length > 3 && str.length < 10){
		cssForm = 'form-control is-valid';
	}
	
	return(
		<form className="form">
			<div className="form-group">
				<input 
					type="text" 
					className={cssForm}
					value={storeFromApp.textInput}
					onChange={(ev)=>addSelectValue(ev.target.value)} />
				<div className="invalid-feedback">
		          	is not correct: {storeFromApp.textInput.length} symbols
		        </div>
				<div className="valid-feedback">
		          	is correct: {storeFromApp.textInput.length} symbols
		        </div>
			</div>
		</form>
	);
}

export default Task;