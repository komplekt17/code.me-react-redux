import React from 'react';

const CalendarHeader = ({date, month, year, handlerButtons}) => {

	const today = new Date(year, month, date);
	const monthName = today.toLocaleString('en-us', { month: 'long' });

	return(
		<div className="component-header">
			<button 
				onClick={()=>handlerButtons("previuosYear")}
				type="botton"
				className="btn btn-outline-danger btn-sm">
					<i className="fa fa-angle-double-left" />
			</button>
			<button 
				onClick={()=>handlerButtons("previuosMonth")}
				type="botton"
				className="btn btn-outline-success btn-sm">
					<i className="fa fa-angle-left" />
			</button>
			<h4>{monthName}{" "}{year}</h4>
			<button 
				onClick={()=>handlerButtons("today")}
				type="botton"
				className="btn btn-outline-warning btn-sm">
					<i className="fa fa-dot-circle" />
			</button>
			<button 
				onClick={()=>handlerButtons("nextMonth")}
				type="botton"
				className="btn btn-outline-success btn-sm">
					<i className="fa fa-angle-right" />
			</button>
			<button 
				onClick={()=>handlerButtons("nextYear")}
				type="botton"
				className="btn btn-outline-danger btn-sm">
					<i className="fa fa-angle-double-right" />
			</button>
		</div>
	)
}

export default CalendarHeader;