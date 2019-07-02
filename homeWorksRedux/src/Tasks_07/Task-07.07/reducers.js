const initialState = {
    texts: []
}

const addItem = (state, text) => {
    const arr = state.texts.slice();
    arr.push(text);
    return arr;
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_VALUE_SELECT':
            return ({
                ...state,
                texts: addItem(state, action.value)
            });
        case 'ADD_ITEM_ARRAY':
            return state;
        default:
            return state;
    }
}

export default Reducer;