const initialState = {
	notes: [],
	headerBase: '',
	textBase: '',
	indexEditedNote: -1
}

// добавление новой записи
const addNote = (state, header, text) => {
	const newObj = {
		header: header,
		text: text,
		time: getCurrentTime()
	}
	const arr = state.notes.slice();
	arr.push(newObj);

	return arr;
}

// удаление записи
const deleteNote = (state, idx) => {
	let arr = state.notes.slice();
	arr.splice(idx, 1);
	return arr;
}

// сохранение редактируемой записи
const saveEditedNote = (state, header, text, idx) => {

	const newArray = state.notes.slice(); // копируем стейт
	//console.log(id);
	newArray[idx].header = header; // изменяем свойство
	newArray[idx].text = text; // изменяем свойство
	newArray[idx].time = getCurrentTime();
	return newArray;
}

// получение текущего времени
const getCurrentTime = () => {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    if (hh < 10) hh = "0" + hh;
    if (mm < 10) mm = "0" + mm;
    if (ss < 10) ss = "0" + ss;
	let result = `${hh}:${mm}:${ss}`;
    return result;
}

const Reducer = (state = initialState, action) => {
	switch(action.type){
		case 'VALUE_CLICKED_ITEM':
			if(action.name === "inputText") return {...state, headerBase: action.value}
			else return {...state, textBase: action.value} 
		case 'ADD_NEW_NOTE':
			return {
				...state, 
				notes: addNote(state, action.header, action.text),
				headerBase: '',
				textBase: ''
			}
		case 'EDIT_NOTE':
			return {
				...state,
				headerBase: state.notes[action.index].header,
				textBase: state.notes[action.index].text,
				indexEditedNote: action.index
			}
		case 'DELETE_NOTE':
			return {
				...state, 
				notes: deleteNote(state, action.index)
			}
		case 'SAVE_NOTE':
			return {
				...state, 
				notes: saveEditedNote(state, action.header, action.text, action.index),
				headerBase: '',
				textBase: '',
				indexEditedNote: -1
			}
		default:
			return state;
	}
}

export default Reducer;