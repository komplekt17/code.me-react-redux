const initialState = {
    test: [
      {
        question: "Файл с расширением XLS содержит",
        answers: [
          "Только одну таблицу",
          "Только один рабочий лист с возможно несколькими таблицами",
          "Несколько рабочих листов, образующих рабочую книгу"
        ],
        right: 2,
        check: ""
      },
      {
        question:
          "Для выделения мышкой нескольких областей следует прижать клавишу",
        answers: ["Esc", "Shift", "Ctrl", "Alt"],
        right: 2,
        check: ""
      },
      {
        question: "EXCEL это",
        answers: [
          "Графический редактор",
          "Текстовый процессор",
          "Операционная система",
          "Табличный процессор",
          "Клавиша на клавиатуре"
        ],
        right: 3,
        check: ""
      },
      {
        question:
          "Можно ли изменить имя рабочего листа и названия рабочей книги?",
        answers: [
          "рабочего листа",
          "Только рабочей книги",
          "И рабочего листа и рабочей книги",
          "Нельзя в обоих случаях"
        ],
        right: 2,
        check: ""
      },
      {
        question: "Сколько чисел можно записать в одной ячейке?",
        answers: ["Только одно", "Не более двух", "Более двух"],
        right: 0,
        check: ""
      }
    ],
    testDone: false,
    current: 0,   //  текущий вопрос
    getTime: "00:00"
}

// обработчик navigation
const handlerNav = (state, name) => {
    let currentQuest;
    if(name === 'previous'){
      if(state.current === 0) currentQuest = 0;
      else currentQuest = state.current - 1;
    }else{ // name === 'next'
      if(state.current === state.test.length - 1){
        currentQuest = state.test.length - 1;
      }else currentQuest = state.current + 1;
    }
    return currentQuest;
  }

// обработчик radio
const handlerRadio = (state, index) => {
  const newArray = state.test.slice(); // копируем стейт

  const arr = index.split('.');
  const idQuest = arr[0]; // id вопроса
  const idAnswer = arr[1]; // id варианта ответа

  newArray[idQuest].check = Number(idAnswer);

  return newArray;
}

// обработчик триггера окончания теста
const getDone = (state) => {
  let done = state.testDone
  let count = 0;
  const arr = state.test.slice();
  for(var i = 0; i<arr.length; i++){
    if(arr[i].check === '') count += 1;
  }
  if(count === 0) {
    done = true;
  }
  return done;
}

const Reducer = (state = initialState, action) => {
	switch(action.type){
    case 'SAVE_VALUE_RADIO':
      return {
        ...state,
        test: handlerRadio(state, action.index),
        testDone: getDone(state),
      }
    case 'HANDLER_NAVIGATION':
      return {
        ...state,
        current: handlerNav(state, action.name)
      }
    case 'HANDLER_TIMER':
      return {
        ...state,
        getTime: action.time,
      }
		default:
			return state;
	}
}

export default Reducer;