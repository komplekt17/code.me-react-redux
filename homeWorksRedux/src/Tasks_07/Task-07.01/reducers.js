const Reducer = (state, action) => {

    if (action.type === 'ADD_TEXT') {
        return ({ text: action.text })
    }

}

export default Reducer;