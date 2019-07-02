const selectValueAction = (text) => { 
	return ({
		type: 'VALUE_CLICKED_ITEM',
		value: text,
	})
}

const selectSortingAction = (text) => { 
	return ({
		type: 'SELECT_SORTING_ITEM',
		option: text,
	})
}

export {selectValueAction, selectSortingAction};