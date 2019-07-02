import React from "react";

const TaskComponent = (props) => {

	const {fruits, deleteFruit} = props;

	const table = fruits.map((item, index)=>{
		return (
		    <tr key={index}>
		      	<th>{item.name}</th>
		      	<td>${item.price}</td>
		      	<td>{item.quantity}</td>
		      	<td>${item.price*item.quantity}</td>
		      	<td>
		      		<button 
		      			className="btn btn-primary btn-sm"
		      			onClick={()=>{deleteFruit(index)}}>
		      			Delete
	      			</button>
      			</td>
		    </tr>
		)
	});
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-6">
					<table className="table">
						<thead>
							<tr>
								<th scope="col">Fruit</th>
								<th scope="col">Price</th>
								<th scope="col">Quantity</th>
								<th scope="col">Sum</th>
								<th scope="col">Delete</th>
							</tr>
						</thead>
						<tbody>
							{table}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default TaskComponent;