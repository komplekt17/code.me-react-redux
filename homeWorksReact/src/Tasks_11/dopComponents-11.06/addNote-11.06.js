import React from 'react';
import './addNote.css'

const AddNote = (props) => {

	const { valueInput, handlerInput, handlerClickAddNote } = props;

			/*	<input
	          		className="form-control" 
		      		type="datetime-local" id="meeting-time"
       				name="meeting-time" value="2018-06-12T19:30"
       				min="2018-06-07T00:00" max="2018-06-14T00:00"/>*/
	return(
		<div className="list-group-item">
			<form className="item-add-form d-flex">
			    <input
			      	value={valueInput}
			      	onChange={handlerInput}
	          		className="form-control"
	          		name="addNote"
			      	placeholder="Enter note"
			      	type="text"/>
		      	
			    <div className="input-group-btn">
			      	<button 
				      	onClick={handlerClickAddNote}
				      	className="btn btn-outline-info">
				        Add Note
			      	</button>
			    </div>
		  	</form>
		</div>
	); 
}

export default AddNote;