const initialState = {
	cities: ['Moscow', 'London', 'Paris', 'Berlin', 'New York'],
	valueCheckbox: 0
}

const Reducer = (state = initialState, action) => {
	switch(action.type){
		case 'VALUE_CLICKED_ITEM':
			return {
				...state,
				valueCheckbox: action.value
			}
		default:
			return state;
	}
}

export default Reducer;