import React from 'react';
/*
	8-01. Дан массив. Выведите элементы этого массива в виде списка ul. Сделайте так, чтобы внутри каждой li был чекбокс, по нажатию на который содержимое чекбокса будет перечеркиваться.
*/

const Task = (props) => {

	// скрываем-открываем кнопки
	const toggleHideEdit = () => {
		let elem = document.getElementsByClassName('time-buttons');
		for(let i=0; i<elem.length; i++){
			elem[i].classList.toggle("done-3");
		}
	}

	const {
		storeFromApp, 
		addSelectValue, 
		addNoteFromApp, 
		editNoteFromApp, 
		deleteNoteFromApp,
		saveNoteFromApp } = props;

	let {notes, headerBase, textBase, indexEditedNote} = storeFromApp;

	const listNotes = notes.map((item, index)=>{
		return(
			<div key={index}>
				<h3>{index+1}. {item.header}</h3>
				<div>{item.text}</div>
				<div className="time">
					<div>Creating time: {item.time}</div>
					<div className="time-buttons">
		              	<button
			                className="btn btn-outline-success btn-sm"
			                onClick={() => {
			                	editNoteFromApp(index);
			                	toggleHideEdit(index)}}>
			                <i className="fa fa-edit" />
		              	</button>
		              	<button
			                className="btn btn-outline-danger btn-sm"
			                onClick={() => {
			                	deleteNoteFromApp(index)}}>
			                <i className="fa fa-trash" />
		             	 </button>
		            </div>
				</div>
			</div>
		);
		});
		return(
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<form className="form-group" onSubmit={(ev) => ev.preventDefault()}>
							<input 
								name="inputText"
								className="form-control" 
								type="text" 
								value={headerBase}
								onChange={(ev)=>{
									addSelectValue(ev.target.value, ev.target.name);}}/>
							<textarea 
								name="inputTextarea" rows="5"
								className="form-control" 
								value={textBase} 
								onChange={(ev)=>{
									addSelectValue(ev.target.value, ev.target.name);}}/>
							{indexEditedNote < 0 ?
							<button 
								className="btn btn-info btn-block"
								onClick={()=>{
									if(headerBase !== '' && textBase !== ''){
										addNoteFromApp(headerBase, textBase)
									} else alert('Comlete all fields')}}>
								Add Note
							</button>
							:
							<button
								className="btn btn-success btn-block"
								onClick={()=>{
									if(headerBase !== '' && textBase !== ''){
										saveNoteFromApp(headerBase, textBase, indexEditedNote);
		                				toggleHideEdit();
									} else alert('Comlete all fields')}}>
								Save Note
							</button>}
						</form>
					</div>
					<div className="col-md-6">
						<div className="notes">
							{notes.length !== 0 ? 
								listNotes : 'empty'}
						</div>
					</div>
				</div>
			</div>
			
		);
}

export default Task;