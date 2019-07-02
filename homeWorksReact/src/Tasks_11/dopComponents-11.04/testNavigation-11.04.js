import React from 'react';

const TestNavigation = (props) => {

	const {handlerNav, current, test} = props;

	const totalQuestions = test.length;

	return (
		<div className="time">
			<button 
				className="btn btn-sm btn-primary"
				name="previous"
				onClick={handlerNav}>
				{`<<<`}
			</button>
			<div>
				Question {current+1} from {totalQuestions} Questions
			</div>
			<button className="btn btn-sm btn-primary"
				name="next"
				onClick={handlerNav}>
				{`>>>`}
			</button>
		</div>
	);
}

export default TestNavigation;