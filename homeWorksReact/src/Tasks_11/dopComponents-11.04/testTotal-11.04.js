import React from 'react';

const TestTotal = (props) => {

	const {totalQuestions, totalAnswers, time} = props;

	const answer = totalAnswers();

	return(
		<div className="col-md-6">
    		<div className="notes">
      			<h4>Your Result:</h4>
      			<div>Total qwestions: {totalQuestions}<br/>
      			Total correct answers: {answer}<br/>
      			Time: {time}</div>
			</div>
      	</div>)
} 

export default TestTotal;