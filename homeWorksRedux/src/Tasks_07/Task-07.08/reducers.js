const initialState = {
    colors: ['white', 'yellow', 'lightblue', 'grey', 'green', 'tomato', 'red', 'orange'],
    valueSelect: 0
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_VALUE_SELECT':
            return ({
                ...state,
                valueSelect: action.value
            })
        default:
            return state;
    }
}

export default Reducer;