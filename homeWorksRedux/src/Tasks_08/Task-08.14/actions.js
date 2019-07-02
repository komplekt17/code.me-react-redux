const saveInputAction = (text, name) => { 
	return ({
		type: 'SAVE_VALUE_INPUT',
		value: text,
		name: name
	})
}

const addCityAction = (text) => { 
	return ({
		type: 'ADD_NEW_CITY',
		valueSelect: text,
	})
}

export {saveInputAction, addCityAction}