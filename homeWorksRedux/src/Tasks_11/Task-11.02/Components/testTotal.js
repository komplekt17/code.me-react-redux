import React from 'react';

const TestTotal = (props) => {
	const {totalQuestions, totalAnswers} = props;

	return(
		<div className="notes">
  			<h4>Your Result:</h4>
  			<p>Total qwestions: {totalQuestions}</p>
  			<p>Total correct answers: {totalAnswers}</p>
		</div>
	);
}

export default TestTotal;