const inputValueAction = (index, value) => { 
	return ({
		type: 'SAVE_VALUE_INPUT',
		index, value
	})
}

const handleClickAction = (index, value) => {
	return ({
		type: 'HANDLER_CLICK',
		index, value
	})
}

export {inputValueAction, handleClickAction};