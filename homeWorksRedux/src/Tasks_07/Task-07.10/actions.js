const selectValueAction = (number) => {
    return ({
        type: 'ADD_VALUE_SELECT',
        value: number
    })
}

export default selectValueAction;