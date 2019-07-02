import React from 'react';

const TestNavigation = ({totalQuestions, totalAnswers, handlerNav}) => {

	return (
		<div className="time">
			<button 
				className="btn btn-sm btn-outline-success"
				onClick={()=>handlerNav("previous")}>
				<i className="fa fa-arrow-left"></i>
			</button>
      			<div> {totalAnswers} Answers from {totalQuestions} Qwestions</div>
			<button className="btn btn-sm btn-outline-success"
				onClick={()=>handlerNav("next")}>
				<i className="fa fa-arrow-right"></i>
			</button>
		</div>
	);
}

export default TestNavigation;