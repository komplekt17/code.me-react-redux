import React from 'react';

import './Calendar.css';

const CalenderPanel = ({month, year, createCalendar, tdHandlerClick}) => {

	const calendar = {__html: createCalendar(year, month)};
	return(
		<table className="table calendar">
			<thead>
				<tr>
					<th>Mo</th>
					<th>Tu</th>
					<th>We</th>
					<th>Th</th>
					<th>Fr</th>
					<th>Sa</th>
					<th>Su</th>
				</tr>
			</thead>
			<tbody dangerouslySetInnerHTML={calendar} onClick={tdHandlerClick}/>
		</table>
	)
}

export default CalenderPanel;