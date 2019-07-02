const initialState = {
    options: ['BaseSelector'],
    valueSelect: 0,
    textInp: ''
}
// добавление нового элемента в структуру массива
const addItemArray = (state, item) =>{
    const arr = state.options.slice();
    arr.push(item);
    return arr;
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_VALUE_SELECT':
            return ({
                ...state,
                valueSelect: action.value
            })
        case 'ADD_VALUE_INPUT':
            return ({
                ...state,
                textInp: action.input
            })
        case 'ADD_VALUE_ARRAY':
            return ({
                ...state,
                options: addItemArray(state, action.text)
            })
        default:
            return state;
    }
}

export default Reducer;