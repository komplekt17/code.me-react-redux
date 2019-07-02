const initialState = {
	users: [
		{name: 'John Silver, age: 30'},
		{name: 'Michel Somer, age: 40'},
		{name: 'Andy Croute, age: 50'},
	]
}

const addChangeItem = (state, value, idx) => {
	const arr = state.users.slice();
	arr[idx].name = value;
	return arr;
}

const Reducer = (state = initialState, action) => {
	switch(action.type){
		case 'VALUE_CLICKED_ITEM':
			return {
				...state,
				users: addChangeItem(state, action.value, action.index)
			}
		default:
			return state;
	}
}

export default Reducer;