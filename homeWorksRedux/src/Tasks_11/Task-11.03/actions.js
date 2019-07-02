const inputValueAction = (value) => { 
	return ({
		type: 'SAVE_VALUE_INPUT',
		value
	})
}

const handleClickAction = (index, value) => {
	return ({
		type: 'HANDLER_CLICK',
		index, value
	})
}

const handlerNavAction = (text) => {
	return ({
		type: 'HANDLER_NAVIGATION',
		name: text
	})
}

const handleTimeAction = (time) => {
	return ({
		type: 'HANDLER_TIMER',
		time
	})
}

export {inputValueAction, handleClickAction, handlerNavAction, handleTimeAction};