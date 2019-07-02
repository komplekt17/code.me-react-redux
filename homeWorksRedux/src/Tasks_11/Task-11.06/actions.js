const handlerInputAction = (name, value, idx) => { 
	return ({
		type: 'SAVE_VALUE_INPUT',
		name, value, idx
	})
}

const AddNewNoteAction = (text) => {
	return ({
		type: 'HANDLER_ADD_NOTE',
		text
	})
}

const buttonsOperationAction = (name, index) => {
	return ({
		type: 'BUTTONS_OPERATION_NOTE',
		name, index
	})
}

const saveEditNoteAction = (idx, value) => {
	return ({
		type: 'SAVE_EDITABLE_NOTE',
		idx, value
	})
}

const handlerFilterAction = (index) => {
	return ({
		type: 'HANDLER_FILTER',
		index
	})
}

export{
	handlerInputAction, 	// общий обработчик input`ов
 	AddNewNoteAction,		// обработчик добавления новой заметки
 	buttonsOperationAction,// обработчик кнопок ToggleDone, importantNote, deleteNote
 	saveEditNoteAction, 	// сохранение редактируемой записи
 	handlerFilterAction };	// смена активного фильтра и подсвечивание его кнопки