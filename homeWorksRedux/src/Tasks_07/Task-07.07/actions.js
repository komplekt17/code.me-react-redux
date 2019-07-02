const selectValueAction = (text) => {
    return ({
        type: 'ADD_VALUE_SELECT',
        value: text
    })
}

const addItemToArray = (text) => {
    return ({
        type: 'ADD_ITEM_ARRAY',
        value: text
    })
}

export { selectValueAction, addItemToArray };