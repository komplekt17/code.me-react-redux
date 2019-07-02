const selectValueAction = (number) => { 
	return ({
		type: 'VALUE_CLICKED_ITEM',
		value: number,
	})
}

export default selectValueAction;