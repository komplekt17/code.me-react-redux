const initialState = {
	cities: [
		{country: 'Russia', city: 'Moscow', checked: true},
		{country: 'England', city: 'London', checked: true},
		{country: 'France', city: 'Paris', checked: true},
		{country: 'Germany', city: 'Berlin', checked: true},
		{country: 'USA', city: 'New York', checked: true},
	]
}

const changeCheckedItem = (state, idx) => {
	const arr = state.cities.slice();
	arr[idx].checked = !arr[idx].checked;
	return arr;
}

const Reducer = (state = initialState, action) => {
	switch(action.type){
		case 'VALUE_CLICKED_ITEM':
			return {
				...state,
				cities: changeCheckedItem(state, action.index)
			}
		default:
			return state;
	}
}

export default Reducer;