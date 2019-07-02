import React from 'react';

const TestResult = ({test}) => {

	let style;

	const result = test.map((item, idx) => {

		if(item.answers[item.right]===item.answers[item.check]){
			style = 'rightly';
		}else{
			style = 'wrongly';
		}

      	return (
	        <div key={idx} className="notes" id={idx}>
	          	<h4>{item.question}</h4>
	          	<p>Correct answer:<br/> {item.answers[item.right]}</p>
	          	<p>Your answer:<br/> 
		          	<span className={style}>
		          		{item.answers[item.check]} 
		          	</span>
      			</p>
	        </div>
      	)
    })

	return result;
}

export default TestResult;