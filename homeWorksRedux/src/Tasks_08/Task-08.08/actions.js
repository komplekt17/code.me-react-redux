const selectValueAction = (text, name) => { 
	return ({
		type: 'VALUE_CLICKED_ITEM',
		value: text,
		name: name
	})
}

const addNewNoteAction = (header, text) => {
	return {
		type: 'ADD_NEW_NOTE',
		header: header,
		text: text
	}
}

const editNoteAction = (index) => {
	return {
		type: 'EDIT_NOTE',
		index: index
	}
}

const deleteNoteAction = (index) => {
	return {
		type: 'DELETE_NOTE',
		index: index
	}
}

const saveNoteAction = (header, text, index) => {
	return {
		type: 'SAVE_NOTE',
		header: header,
		text: text,
		index: index
	}
}

export {selectValueAction, addNewNoteAction, editNoteAction, deleteNoteAction, saveNoteAction};