const selectValueAction = (text, number) => { 
	return ({
		type: 'VALUE_CLICKED_ITEM',
		value: text,
		index: number
	})
}

export default selectValueAction;