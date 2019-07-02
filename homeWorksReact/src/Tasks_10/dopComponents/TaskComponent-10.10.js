import React from "react";
import TaskComponentAddItem from './TaskComponentAddItem-10.10';

const TaskComponent = (props) => {

	const {
		fruits, 
		deleteFruit, 
		handlerCheckbox, 
		handlerInput, 
		addItem,
		input1,
		input2,
		input3
	} = props;

	let summ = 0;
	let qwt = 0;
	const table = fruits.map((item, index)=>{

		if(item.checked){
			summ += item.price*item.quantity;
			qwt += item.quantity;
		}
		
		return (
		    <tr key={index}>
		      	<th>
		      		<input id={index} 
		      			type="checkbox"
		      			className="form-check-input"
		      			checked={item.checked}
		      			onChange={handlerCheckbox}/>
		      	</th>
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
				<div className="col-md-5">
					<TaskComponentAddItem
						handlerInput={handlerInput}
						addItem={addItem}
						input1={input1}
						input2={input2}
						input3={input3}/>
				</div>
				<div className="col-md-7">
					<table className="table">
						<thead>
							<tr>
								<th scope="col">Check</th>
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
					<div className="notes">
						<p>Selected Total: ${summ}</p>
						<p>Quantity: {qwt}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TaskComponent;