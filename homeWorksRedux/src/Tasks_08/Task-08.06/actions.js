const selectValueAction = (text, number, name) => { 
	return ({
		type: 'VALUE_CLICKED_ITEM',
		value: text,
		index: number,
		field: name
	})
}

export default selectValueAction;