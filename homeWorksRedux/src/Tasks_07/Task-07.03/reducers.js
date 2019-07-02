const initialState = { checked: false };

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CHECKBOX_TEXT':
            return { checked: action.checked };
        default:
            return state;
    }
}

export default Reducer;