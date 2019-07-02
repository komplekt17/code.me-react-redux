const initialState = { checked: false };

const Reducer = (state, action) => {
    if (typeof state === 'undefined') return initialState;
    else {
        if (action.type === 'ADD_CHECKBOX_TEXT') return ({ checked: action.checked })
    }

}

export default Reducer;