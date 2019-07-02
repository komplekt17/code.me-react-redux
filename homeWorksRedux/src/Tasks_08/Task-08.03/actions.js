const selectValueAction = (number) => { 
	return ({
		type: 'VALUE_CLICKED_ITEM',
		index: number
	})
}

export default selectValueAction;