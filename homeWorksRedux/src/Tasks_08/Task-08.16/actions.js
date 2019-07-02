const selectValueAction = (number) => { 
	return ({
		type: 'GET_VALUE_CHECKBOX',
		value: number,
	})
}

export default selectValueAction