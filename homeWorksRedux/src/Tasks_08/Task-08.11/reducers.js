const initialState = {
	textInput: ''
}

const Reducer = (state = initialState, action) => {
	switch(action.type){
		case 'VALUE_CLICKED_ITEM':
			return {
				...state,
				textInput: action.value
			}
		default:
			return state;
	}
}

export default Reducer;