const selectValueAction = (text) => {
    return ({
        type: "ADD_VALUE_SELECT",
        value: text
    })
}

export default selectValueAction;