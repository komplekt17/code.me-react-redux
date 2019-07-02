import React from 'react';

const TestTotal = ({totalQuestions, totalRightAnswers, time}) => {

	return(
		<div className="col-md-6">
    		<div className="notes">
      			<h4>Your Result:</h4>
      			<div>Total qwestions: {totalQuestions}</div>
      			<div>Total correct answers: {totalRightAnswers}</div>
      			<div>Time: {time}</div>
			</div>
      	</div>)
} 

export default TestTotal;