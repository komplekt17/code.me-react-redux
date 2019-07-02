import React from "react";

const TaskComponent = (props) => {

	const {users, editUser, handlerInput, handlerFocus, value} = props;

	const user = users.map((item, index)=>{
		return (
			<li key={index} className="list-group-item">
				{item}, 
				<span id={index}
					className="rightly"
					onClick={editUser}> editMe
				</span>
				<input 
					className='done-3'
					name={index}
					type="text"
					value={value}
					onChange={handlerInput}
					onBlur={handlerFocus}/>
			</li>
		)
	});
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-8">
					<ul className="list-group">{user}</ul>
				</div>
			</div>
		</div>
	);
}

export default TaskComponent;