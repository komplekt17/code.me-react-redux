const selectValueAction = (number) => {
    return ({
        type: 'ADD_VALUE_SELECT',
        value: number
    })
}
const inputValueAction = (text) => {
    return ({
        type: 'ADD_VALUE_INPUT',
        input: text
    })
}
const addInputValueAction = (text) => {
    return ({
        type: 'ADD_VALUE_ARRAY',
        text: text
    })
}
export { selectValueAction, inputValueAction, addInputValueAction};