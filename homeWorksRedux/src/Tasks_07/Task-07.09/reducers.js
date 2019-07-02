const initialState = {
    valueSelect: false
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