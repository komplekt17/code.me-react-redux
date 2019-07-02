import React from 'react';

import './calendarPanel.css';

const CalendarPanel = ({month, year, createCalendar, tdHandlerClick}) => {

	// обработчик клика по дате календаря
    const handlerClick = (ev) => {
    	const elem = Number(ev.target.getAttribute('name'));
    	const arrTr = ev.target.parentNode.parentNode.childNodes; 

    // перебор коллекции и сброс класса выделения	
    	for(let i = 0; i<arrTr.length; i++){
    		let arrTd = arrTr[i].childNodes;
    		for(let j = 0; j<arrTd.length; j++){
    			arrTd[j].classList.remove('activeTd');
    		}
    	}
    	
    	if(elem !== 0) {
    		tdHandlerClick(elem, 'all');
    		ev.target.classList.toggle('activeTd');
    	}
    }

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
			<tbody 
				dangerouslySetInnerHTML={calendar} 
				onClick={(ev)=>handlerClick(ev)}/>
		</table>
	)
}

export default CalendarPanel;