const initialState = {
	notes: [
			{
				id: 0,
				note: 'Make homework React',
				datetime: '23.05.2019, 11:11',
				done: false, 
				important: true,
				visible: true
			},
			{
				id: 1,
				note: 'Create homework Redux',
				datetime: '23.05.2019, 16:12',
				done: true, 
				important: false,
				visible: true
			},
			{
				id: 2,
				note: 'Get a react`s practice',
				datetime: '26.05.2019, 14:32',
				done: false, 
				important: false,
				visible: true
			},
			{
				id: 3,
				note: 'Have a lunch',
				datetime: '22.05.2019, 11:12',
				done: false, 
				important: false,
				visible: true
			}
		],
  		buttonsArr: [
		    { nameFilter: "all", labelFilter: "All" },
		    { nameFilter: "active", labelFilter: "Active" },
		    { nameFilter: "important", labelFilter: "Important" },
		    { nameFilter: "done", labelFilter: "Done" },
		    //{ nameFilter: "total", labelFilter: "Total" }
  		],
		valueInput: '',
		filter: 'all',
		searchInput: '',
		date: (new Date()).getDate(),
		month: (new Date()).getMonth(),
		year: (new Date()).getFullYear()
	}

// обработчик input редактируемой записи
const editNote = (state, name, value, idx) => {
	const arr = state.notes.slice();
	arr[idx].note = value;

	return arr;
}

// сохранение редактируемой записи
const saveEditNote = (state, idx, value) => {
	const arr = state.notes.slice();
	arr[idx].note = value;
	arr[idx].visible = !arr[idx].visible;

	return arr;
}

// обработчик добавления новой заметки
const addNewNote = (state, text) => {
	const arr = state.notes.slice();
	const newNote = {
		note: text,
		done: false,
		important: false,
		visible: true
	}
	arr.push(newNote);
	return arr;	
}

// обработчик кнопок ToggleDone, importantNote, deleteNote
const buttonsOperations = (state, name, idx) => {
	const arr = state.notes.slice();
	if(name === 'importantNote'){
		arr[idx].important = !arr[idx].important;
	}
	else if(name === 'deleteNote'){
		arr.splice(idx, 1)
	}
	else if(name === 'ToggleDone'){
		arr[idx].done = !arr[idx].done;
	}
	else { // name === editNote
		arr[idx].visible = !arr[idx].visible;
	}
	return arr;	
}
// смена активного фильтра и подсвечивание его кнопки
const onFilter = (state, idx) => {
    let filter = "";
    if (state.buttonsArr[idx].nameFilter === "all") {
      filter = "all";
    }
    if (state.buttonsArr[idx].nameFilter === "active") {
      filter = "active";
    }
    if (state.buttonsArr[idx].nameFilter === "important") {
      filter = "important";
    }
    if (state.buttonsArr[idx].nameFilter === "done") {
      filter = "done";
    }
    return filter;
};

const Reducer = (state = initialState, action) => {
	switch(action.type){
		case 'SAVE_VALUE_INPUT':
			if(action.name === 'addNote'){
				return {
					...state,
					valueInput: action.value
				}
			}
			else if(action.name === 'editNote'){
				return {
					...state,
					notes: editNote(
							state, 
							action.name,
							action.value,
							action.idx)
				}
			}
			else{ // name === searchNote
				return {
					...state,
					searchInput: action.value
				}
			}
		case 'HANDLER_ADD_NOTE':
			return {
				...state,
				notes: addNewNote(state, action.text),
				valueInput: ''
			}
		case 'BUTTONS_OPERATION_NOTE':
			return {
				...state,
				notes: buttonsOperations(state, action.name, action.index),
			}
		case 'SAVE_EDITABLE_NOTE':
			return {
				...state,
				notes: saveEditNote(state, action.idx, action.value),
				valueInput: ''
			}
		case 'HANDLER_FILTER':
			return {
				...state,
				filter: onFilter(state, action.index)
			}		
		default:
			return state;
	}
}

export default Reducer;

