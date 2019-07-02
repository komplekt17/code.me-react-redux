const selectValueAction = (text) => { 
	return ({
		type: 'VALUE_CLICKED_ITEM',
		value: text,
	})
}

export default selectValueAction;