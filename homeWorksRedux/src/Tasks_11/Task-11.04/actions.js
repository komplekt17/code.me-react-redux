const handleRadioAction = (index) => { 
	return ({
		type: 'SAVE_VALUE_RADIO',
		index
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

export {handleRadioAction, handlerNavAction, handleTimeAction};