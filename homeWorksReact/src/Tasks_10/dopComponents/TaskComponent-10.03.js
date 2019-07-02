import React from "react";

const TaskComponent = (props) => {

	const {users, showMessage} = props;

	const user = users.map((item, index)=>{
		return (
			<li key={index}>
				Name: {item.name}, 
				Surname: {item.surname}, 
				age: {item.age}, 
				<span onClick={()=>{showMessage(item.name)}}> ClickMe</span>
			</li>
		)
	});
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-6">
					<ul>{user}</ul>
				</div>
			</div>
		</div>
	);
}

export default TaskComponent;