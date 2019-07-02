import React from 'react';

const TestView = (props) => {

	const {test, current, valueTest, handlerValue, handleClick} = props;

	let classStyle = "";
	if(test[current].check === '') classStyle = "input-group";
	else classStyle = "input-group done-3"; 

	return(
		<div className="notes">
			  <h4>{test[current].question}</h4>
			  <ol>
			    {test[current].answers.map((item, index) => {
			      	return (
			        	<li key={index}>
			          		{item}
			        	</li>
			      	);
			    })}
			  </ol>
			  <div className={classStyle}>
			    <input
			      value={valueTest}
			      onChange={handlerValue}
			      placeholder="Enter answer number"
			      type="number"
			    />
			    <div className="input-group-append">
			      <button 
			      	onClick={()=>{handleClick(current)}}
			      	className="btn btn-primary">
			        Save
			      </button>
			    </div>
			  </div>
			</div>
	);
}

export default TestView;