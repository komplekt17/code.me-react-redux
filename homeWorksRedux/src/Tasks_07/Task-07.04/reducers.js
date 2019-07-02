const initialState = { valueSelect: '' }

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_VALUE_SELECT':
            return ({
                valueSelect: action.value
            })
        default:
            return state
    }
}

export default Reducer;