import React from 'react';
import './addNote.css'

const AddNote = ({ valueInput, handlerInput, AddNewNote }) => {
	
	return(
		<div className="list-group-item">
			<form 
				className="item-add-form d-flex" 
				onSubmit={(ev)=>ev.preventDefault()}>
			    <input
			      	value={valueInput}
			      	onChange={(ev)=>handlerInput(ev.target.name, ev.target.value)}
	          		className="form-control"
	          		name="addNote"
			      	placeholder="Enter note"
			      	type="text"/>
			    <div className="input-group-btn">
			      	<button 
				      	onClick={()=>{
							if(valueInput === ''){
								alert('You must enter some note');
							}else AddNewNote(valueInput);
				      	}}
				      	className="btn btn-outline-info">
				        Add Note
			      	</button>
			    </div>
		  	</form>
		</div>
	); 
}

export default AddNote;