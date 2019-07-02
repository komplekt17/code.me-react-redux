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
    done: false
}
// обработчик input
const handlerValueInput = (state, index, value) => {
  const arr = state.test.slice();
  arr[index].check = Number(value);
  return arr;
}
// обработчик click
const handlerClick = (state, index, value) => {
  const arr = state.test.slice();
  arr[index].check = Number(value)-1;
  return arr;
}
// обработчик триггера окончания теста
const getDone = (state) => {
  let {done} = state
  let count = 0;
  const arr = state.test.slice();
  for(var i = 0; i<arr.length; i++){
    if(arr[i].check === '') count += 1;
  }
  if(count === 0) done = true;
  return done;
}

const Reducer = (state = initialState, action) => {
	switch(action.type){
    case 'SAVE_VALUE_INPUT':
      return {
        ...state,
        test: handlerValueInput(state, action.index, action.value)
      }
    case 'HANDLER_CLICK':
      return {
        ...state,
        test: handlerClick(state, action.index, action.value),
        done: getDone(state)
      }
		default:
			return state;
	}
}

export default Reducer;