import React from 'react';

const EnterFruit = ({storeFromApp, saveValueInput, addNewFrut}) => {

	let {input1, input2, input3} = storeFromApp;

	return (
		<div className="col-md-5">
			<form className="notes" onSubmit={(ev)=>ev.preventDefault()}>
				<div className="form-group">
					<label htmlFor="input1">Enter fruit</label>
					<input 
						className="form-control"
						id="input1"
						value={input1}
						onChange={(ev)=>saveValueInput(ev.target.id, ev.target.value)}
						name="input1" type="text"/>
				</div>
				<div className="form-group">
					<label htmlFor="input2">Enter price</label>
					<input  
						className="form-control"
						id="input2"
						value={input2}
						onChange={(ev)=>saveValueInput(ev.target.id, ev.target.value)}
						name="input2" type="number"/>
				</div>
				<div className="form-group">
					<label htmlFor="input3">Enter quantity</label>
					<div className="input-group">
						<input  
							className="form-control"
							id="input3" 
							value={input3}
							onChange={(ev)=>saveValueInput(ev.target.id, ev.target.value)}
							name="input3" type="number"/>
		  				<div className="input-group-append">
							<button 
								onClick={()=>{
									if(input1 !=='' && input2 !=='' && input3 !==''){
										addNewFrut(input1, input2, input3)
									}else alert('Comlete all fields')
								}}
								className="btn btn-outline-success">
								Add Fruit
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	)
}

export default EnterFruit;