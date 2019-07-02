const initialState = {
	users: [
	    {firstName: 'Bob', surname: 'Meljanski', age: 40},
		{firstName: 'Michel', surname: 'Hensson', age: 20},
		{firstName: 'Jane', surname: 'Mitchel', age: 54},
		{firstName: 'Rebeka', surname: 'Wotson', age: 44},
		{firstName: 'Max', surname: 'Payton', age: 39}
	]
}

const addChangeItem = (state, value, idx, name) => {
	const arr = state.users.slice();

	switch(name){
		case 'firstName':
			arr[idx].firstName = value;
			return arr;
		case 'surname':
			arr[idx].surname = value;
			return arr;
		case 'age':
			arr[idx].age = value;
			return arr;
		default:
			return arr;
	}
}

const Reducer = (state = initialState, action) => {
	switch(action.type){
		case 'VALUE_CLICKED_ITEM':
			return {
				...state,
				users: addChangeItem(state, action.value, action.index, action.field)
			}
		default:
			return state;
	}
}

export default Reducer;