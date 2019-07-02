const initialState = {
    texts: [
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et accusantium odio velit laborum eveniet fugiat, praesentium. Aspernatur fugiat perspiciatis id ea officia, modi alias.',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis suscipit dolores numquam tempora facere impedit, voluptatibus tempore magni, eaque mollitia officiis dolor soluta sapiente est excepturi. Dicta, eaque aperiam corporis!',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis suscipit dolores numquam tempora facere impedit, voluptatibus tempore magni, eaque mollitia officiis dolor soluta sapiente est excepturi. '
    ],
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