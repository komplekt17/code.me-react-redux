import React from 'react';

import './filterPanel.css'

const FilterPanel = (props) => {

	const {
		notes, 
		visibleItems,
		filterNotes,
		filter, 
		buttonsArr, 
		onFilter} = props;

	const buttons = buttonsArr.map((item, index)=>{
		let classFilter = 'btn btn-outline-info btn-sm';
		if(filter === item.nameFilter) classFilter = "btn btn-primary btn-sm";
		let count = filterNotes(visibleItems, item.nameFilter).length

		if(item.nameFilter === 'total'){
			count = notes.length;
		}
		return(
			<button 
				key={index} 
				onClick={()=>onFilter(index)}
				className={classFilter}>
				{item.labelFilter}
				<span className="badge badge-success count">
					{count}
				</span>
			</button>
		);
	});

	return(
		<div className="todo-list-item">
			<div className="btn-group">
				{buttons}
			</div>
		</div>
	)
}

export default FilterPanel;