const initialState = {
	test: [
		{
			question: 'EXCEL это',
			answers: [
				'Графический редактор',
				'Текстовый процессор',
				'Операционная система',
				'Табличный процессор',
				'Клавиша на клавиатуре',
			],
			right: 3,
			check: 0 
		},
		{
			question: 'Файл с расширением XLS содержит',
			answers: [
				'Только одну таблицу',
				'Только один рабочий лист с возможно несколькими таблицами',
				'Несколько рабочих листов, образующих рабочую книгу',
			],
			right: 2,
			check: 0 
		},
		{
			question: 'Для выделения мышкой нескольких областей следует прижать клавишу',
			answers: [
				'Esc',
				'Shift',
				'Ctrl',
				'Alt'
			],
			right: 2,
			check: 0  
		},
		{
			question: 'Можно ли изменить имя рабочего листа и названия рабочей книги?',
			answers: [
				'рабочего листа',
				'Только рабочей книги',
				'И рабочего листа и рабочей книги',
				'Нельзя в обоих случаях',
			],
			right: 2,
			check: 0 
		},
		{
			question: 'Сколько чисел можно записать в одной ячейке?',
			answers: [
				'Только одно',
				'Не более двух',
				'Более двух',
			],
			right: 0,
			check: 0
		},
	]
}

const handleRadioChange = (state, idCheck) => {

	const arr =  idCheck.split('.');
	const idQuest = arr[0]; // id вопроса
	const idAnswer = arr[1]; // id варианта ответа

	const newArray = state.test.slice(); // копируем стейт
	newArray[idQuest].check = Number(idAnswer);

	return newArray;
}

const Reducer = (state = initialState, action) => {
	switch(action.type){
		case 'GET_VALUE_CHECKBOX':
			return{
				...state,
				test: handleRadioChange(state, action.value)
			}
		default: 
			return state
	}
}

export default Reducer