const selectValueAction = (number) => { 
	return ({
		type: 'ITEM_CLICKED_CHECKBOX',
		value: number
	})
}

export default selectValueAction;