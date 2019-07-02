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
		    { nameFilter: "total", labelFilter: "Total" }
  		],
		valueInput: '',
		filter: 'total',
		searchInput: '',
		date: (new Date()).getDate(),
		month: (new Date()).getMonth(),
		year: (new Date()).getFullYear()
	}

// метод генерации случайного id
const getRandId = () => {
	return Math.random();
}

// обработка дат с одним знаком
const addZero = (val) => {
	var valString = val + "";
	if (valString.length < 2) {return "0" + valString;} 
	else {return valString;}
}

// получение отформатированной даты
const getTimeDate = (state) => {

	const d = state.date;
	const m =  addZero(state.month+1);
	const y = state.year;
	const hh =  addZero((new Date()).getHours());
	const mm =  addZero((new Date()).getMinutes());

	return d+"."+m+"."+y+", "+hh+":"+mm;
}

// обработчик input редактируемой записи
const editNote = (state, name, value, idx) => {
	const arr = state.notes.slice();
	//ищем заметку с id === idx
    for (let i = 0; i < arr.length; i++) {
      	if (arr[i].id === idx) {
			arr[i].note = value;
      	}
	}

	return arr;
}

// сохранение редактируемой записи
const saveEditNote = (state, idx, value) => {
	const arr = state.notes.slice();
	//ищем заметку с id === idx
    for (let i = 0; i < arr.length; i++) {
      	if (arr[i].id === idx) {
        	arr[i].note = value;
			arr[i].visible = !arr[i].visible;
      	}
	}

	return arr;
}

// обработчик добавления новой заметки
const addNewNote = (state, text) => {
	const arr = state.notes.slice();
	const newNote = {
		id: getRandId(),
		note: text,
		datetime: getTimeDate(state),
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
	if(name === 'importantNote') {
		//ищем заметку с id === idx
	    for (let i = 0; i < arr.length; i++) {
	      	if (arr[i].id === idx) {
	        	arr[i].important = !arr[i].important;
	      	}
    	}
	}
	else if(name === 'deleteNote') {
		//ищем заметку с id === idx
	    for (let i = 0; i < arr.length; i++) {
	      	if (arr[i].id === idx) {
	        	arr.splice(i, 1);
	      	}
    	}
	}
	else if(name === 'ToggleDone') {
		//ищем заметку с id === idx
	    for (let i = 0; i < arr.length; i++) {
	      	if (arr[i].id === idx) {
	        	arr[i].done = !arr[i].done;
	      	}
    	}
	}
 // name === editNote
	else {
		//ищем заметку с id === idx
	    for (let i = 0; i < arr.length; i++) {
	      	if (arr[i].id === idx) {
	        	arr[i].visible = !arr[i].visible;
	      	}
    	}
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
	if(state.buttonsArr[idx].nameFilter === 'total'){
		filter = 'total'
	}
    return filter;
};

// обработчик кнопок календаря
const handlerButton = (state, name) => {
    	let month = state.month;
    	let year = state.year;

    	if(name === 'nextYear') return {...state, year: year+1}
    	else if(name === 'previuosYear') return {...state, year: year-1}
    	else if(name === 'nextMonth'){
    		if(month === 11) return {...state, month: 0, year: year+1}
			else return {...state, month: month+1}
    	}
    	else if(name === 'previuosMonth'){
			if(month === 0) return {...state, month: 11, year: year-1}
			else return {...state, month: month-1}
		}
		else return {
			...state, 
			date: (new Date()).getDate(), 
			month: (new Date()).getMonth(), 
			year: (new Date()).getFullYear()}
    }

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
		case 'HANDLER_BUTTONS_CALENDAR':
			return handlerButton(state, action.name)
		case 'TD_HANDLER_CLICK':
			return {
				...state,
				date: addZero(action.elem),
				filter: action.filter
			}		
		default:
			return state;
	}
}

export {Reducer, addZero};