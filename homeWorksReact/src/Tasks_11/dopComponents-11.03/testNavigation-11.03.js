import React from 'react';

const TestNavigation = (props) => {

	const {handlerNav} = props;

	return (
		<div className="time">
			<button 
				className="btn btn-sm btn-primary"
				name="previous"
				onClick={handlerNav}>
				{`<<<`}
			</button>
			<button className="btn btn-sm btn-primary"
				name="next"
				onClick={handlerNav}>
				{`>>>`}
			</button>
		</div>
	);
}

export default TestNavigation;