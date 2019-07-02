const initialState = {
    cities: ['Moscow', 'New York', 'Paris', 'London', 'Berlin', 'Mumbay'],
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