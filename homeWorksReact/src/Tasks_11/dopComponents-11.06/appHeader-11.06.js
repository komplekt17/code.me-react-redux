import React from 'react';

import './appHeader.css';

const AppHeader = () => {
	return(
		<div className="component-header">
	      	<h4>Tasks</h4>
		</div>
	)
}

const HeaderApp = ({date, month, year}) => {

	const today = new Date(year, month, date);
	const monthName = today.toLocaleString('en-us', { month: 'long' });

	return(
		<div className="component-header">
	      	<h4>My notes at date:{" "}{date}{" "}{monthName}{" "}{year}</h4>
		</div>
	)
}

export {AppHeader, HeaderApp}
