const selectValueAction = (text, name) => { 
	return ({
		type: 'VALUE_CLICKED_ITEM',
		value: text,
		name: name
	})
}

const saveNewWorkerAction = (firstName, surname, salary, option) => {
	return {
		type: 'SAVE_NEW_WORKER',
		firstName, surname, salary, option
	}
	
}

export { selectValueAction, saveNewWorkerAction };