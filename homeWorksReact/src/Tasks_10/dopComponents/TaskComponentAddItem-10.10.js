import React from "react";

const TaskComponentAddItem = (props) => {

	const { 
		handlerInput, 
		addItem,
		input1,
		input2,
		input3 
	} = props;

	return(
		<form className="notes">
			<div className="form-group">
				<label htmlFor="input1">Enter fruit</label>
				<input 
					className="form-control"
					id="input1"
					value={input1}
					onChange={handlerInput}
					name="input1" type="text"/>
			</div>
			<div className="form-group">
				<label htmlFor="input2">Enter price</label>
				<input  
					className="form-control"
					id="input2"
					value={input2}
					onChange={handlerInput}
					name="input2" type="number"/>
			</div>
			<div className="form-group">
				<label htmlFor="input3">Enter quantity</label>
				<div className="input-group">
					<input  
						className="form-control"
						id="input3" 
						value={input3}
						onChange={handlerInput}
						name="input3" type="number"/>
	  				<div className="input-group-append">
						<button 
							onClick={addItem}
							className="btn btn-success">
							Add Fruit
						</button>
					</div>
				</div>
			</div>
		</form>
	);
}

export default TaskComponentAddItem;