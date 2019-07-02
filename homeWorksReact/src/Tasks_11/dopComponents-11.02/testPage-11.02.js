import React from 'react';

const TestPage = (props) =>{

	const {test, handlerValue, handleClick} = props;

	const page = test.map((item, idx) => {
		return (
			<div key={idx} className="notes" id={idx}>
			  <h4>{item.question}</h4>
			  <ol>
			    {item.answers.map((answerItem, index) => {
			      	return (
			        	<li key={index}>
			          		{answerItem}
			        	</li>
			      	);
			    })}
			  </ol>
			  <div className="input-group">
			    <input
			      value={test.check}
			      onChange={handlerValue}
			      placeholder="Enter answer number"
			      name={idx}
			      type="number"
			    />
			    <div className="input-group-append">
			      <button 
			      	onClick={handleClick}
			      	name={idx} 
			      	className="btn btn-primary">
			        Save
			      </button>
			    </div>
			  </div>
			</div>
		);
	});

	return page;
	
}

export default TestPage;