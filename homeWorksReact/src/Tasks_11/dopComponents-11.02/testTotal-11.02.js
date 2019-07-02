import React from 'react';

const TestTotal = (props) => {

	const {totalQuestions, totalAnswers} = props;

	const answer = totalAnswers();

	return(
		<div className="col-md-6">
    		<div className="notes">
      			<h4>Your Result:</h4>
      			<p>Total qwestions: {totalQuestions}<br/>
      			Total correct answers: {answer}</p>
			</div>
      	</div>)
} 

export default TestTotal;