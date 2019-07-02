import React from 'react';

import './searchPanel.css'

const SearchPanel = ({searchInput, handlerInput}) => {

	return(
		<div className="todo-list-item">
		    <div className="input-group input-group-sm">
		      	<input
				value={searchInput}
  				onChange={handlerInput}
          		className="form-control search"
          		name="searchNote"
		      	placeholder="Search note"
		      	type="text"/>
		    </div>
		</div>
	)
}

export default SearchPanel;