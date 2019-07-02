import React from 'react';

const TestTotal = (props) => {

	const {totalQuestions, totalAnswers, time} = props;

	const answer = totalAnswers();

	return(
		<div className="col-md-6">
    		<div className="notes">
      			<h4>Your Result:</h4>
      			<p>Total qwestions: {totalQuestions}<br/>
      			Total correct answers: {answer}<br/>
      			Time: {time}</p>
			</div>
      	</div>)
} 

export default TestTotal;