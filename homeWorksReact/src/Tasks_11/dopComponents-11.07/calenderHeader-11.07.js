import React from 'react';

const CalendarHeader = ({date, month, year, handlerButton}) => {

	const today = new Date(year, month, date);
	const monthName = today.toLocaleString('en-us', { month: 'long' });

	return(
		<div className="component-header" onClick={handlerButton}>
			<button
				type="botton"
				name="previuosYear"
				className="btn btn-outline-danger btn-sm">
					<i name="previuosYear" className="fa fa-angle-double-left" />
			</button>
			<button
				type="botton"
				name="previuosMonth"
				className="btn btn-outline-success btn-sm">
					<i name="previuosMonth"className="fa fa-angle-left" />
			</button>
			<h4>{monthName}{" "}{year}</h4>
			<button
				type="botton"
				name="today"
				className="btn btn-outline-warning btn-sm">
					<i name="today"className="fa fa-dot-circle" />
			</button>
			<button
				type="botton"
				name="nextMonth"
				className="btn btn-outline-success btn-sm">
					<i name="nextMonth"className="fa fa-angle-right" />
			</button>
			<button
				type="botton"
				name="nextYear"
				className="btn btn-outline-danger btn-sm">
					<i name="nextYear"className="fa fa-angle-double-right" />
			</button>
		</div>
	)
}

export default CalendarHeader;