import React from 'react';

const TestView = (props) => {

	const {test, current, handleRadioChange} = props;

	return(
		<div className="notes">
		  	<h4>{test[current].question}</h4>
		    {test[current].answers.map((item, index) => {
		      	return (
		        	<div key={index}
						className="custom-control custom-radio">
					<input 
						type="radio"
						id={current+"."+index}
						checked={test[current].check === index}
						onChange={handleRadioChange}
						className="custom-control-input"/>
					<label htmlFor={current+"."+index} 
						className="custom-control-label">
						{item}
					</label>
				</div>	
		      	);
		    })}
		</div>
	);
}

export default TestView;