const initialState = {
	users: [
		{name: 'John', surname: 'Silver', age: 30},
		{name: 'Michel', surname: 'Somer', age: 40},
		{name: 'Andy', surname: 'Croute', age: 50},
	]
}

const Reducer = (state = initialState, action) => {
	switch(action.type){
		case 'VALUE_CLICKED_ITEM':
			return state;
		default:
			return state;
	}
}

export default Reducer;