const saveValueInputAction = (text, value) => {
	return({
		type: 'SAVE_VALUE_INPUT',
		name: text, 
		value: value
	})
}

const handlerCheckboxAction = (item) => {
	return ({
		type: 'HANDLER_CHECKBOX',
		item
	})
}

const addNewFrutAction = (input1, input2, input3) => {
	return ({
		type: 'ADD_NEW_FRUIT',
		input1, input2, input3
	})
}

const deleteFruitAction = (item) => {
	return ({
		type: 'DELETE_FRUIT',
		item
	})
}

export {
	saveValueInputAction,
	handlerCheckboxAction,
	addNewFrutAction,
	deleteFruitAction};