import React from 'react';

const TestView = ({test, current, valueTest, handlerValue, handleClick}) => {
	//console.log(valueTest)
	return(
		<div className="notes">
		 	<h4>{current+1}.{test[current].question}</h4>
			  <ol>
			    {test[current].answers.map((item, index) => {
			      	return <li key={index}>{item}</li>
			    })}
			  </ol>
		 	{test[current].check === '' ?
			  <div className="input-group">
			    <input
			   		value={valueTest}
			      	onChange={(ev)=>handlerValue(ev.target.value)}
			      	placeholder="Enter answer number"
			      	type="number"/>
			    <div className="input-group-append">
			      <button
			      	className="btn btn-outline-warning" 
			      	onClick={(ev)=>{
			      		let lgth = test[current].answers.length;
			      		if(Number(valueTest) <= 0 || 
			      			Number(valueTest) > lgth ||
			      			valueTest === undefined){
			      			alert("Enter correct number from 1 to "+ lgth);
			      		}else handleClick(current, Number(valueTest))
		      		}}>
			        Save Answer
			      </button>
			    </div>
			  </div>
			  :
  				<p>Your answer: {test[current].answers[test[current].check]}</p>
			}
			</div>
	);
}

export default TestView;