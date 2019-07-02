const initialState = {
	workers: [
		{name: 'Bob', surname: 'Meljanski', salary: 5140, sex: 'male'},
		{name: 'Michel', surname: 'Hensson', salary: 5420, sex: 'male'},
		{name: 'Jane', surname: 'Mitchel', salary: 2054, sex: 'female'},
		{name: 'Rebeka', surname: 'Wotson', salary: 4470, sex: 'female'},
		{name: 'Max', surname: 'Payton', salary: 3920, sex: 'male'}
	],
	fields: {
		inputName: '', 
		inputSurname: '', 
		inputSalary: '',
		option: ''
	}
}

// временное сохранение значений полей
const addValueField = (state, value, name) => {
	// копируем объект
	const obj = state.fields; 

	switch(name){
		case 'firstName':
			obj.inputName = value;
			return obj;
		case 'surname':
			obj.inputSurname = value;
			return obj;
		case 'salary':
			obj.inputSalary = value;
			return obj;
		case 'option':
			obj.option = value;
			return obj;
		default:
			return obj;
	}
}

// добавление нового работника
const saveWorkers = (state, firstName, surname, salary, option) => {
	// копируем массив
	const arr = state.workers.slice();
	const newWorker = {
		name: firstName, 
		surname: surname, 
		salary: salary, 
		sex: option
	}

	arr.push(newWorker);
	return arr;
}

const Reducer = (state = initialState, action) => {
	switch(action.type){
		case 'VALUE_CLICKED_ITEM':
			return {
				...state,
				fields: addValueField(state, action.value, action.name)
			}
		case 'SAVE_NEW_WORKER':
			return {
				...state,
				workers: saveWorkers(
					state, 
					action.firstName, 
					action.surname, 
					action.salary, 
					action.option),
				fields: { // очищаем поля
					inputName: '', 
					inputSurname: '', 
					inputSalary: '',
					option: ''
				}
			}
		default:
			return state;
	}
}

export default Reducer;