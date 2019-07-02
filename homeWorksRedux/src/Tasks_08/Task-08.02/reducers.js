const initialState = {
	workers: [
		{name: 'Bob', surname: 'Meljanski', salary: 5140},
		{name: 'Michel', surname: 'Hensson', salary: 5420},
		{name: 'Jane', surname: 'Mitchel', salary: 2054},
		{name: 'Rebeka', surname: 'Wotson', salary: 4470},
		{name: 'Max', surname: 'Payton', salary: 3920}
	],
	summ: 0
}

const Reducer = (state = initialState, action) => {
	switch(action.type){
		case 'ITEM_CLICKED_CHECKBOX':
			return {
				...state,
				summ: action.value
			}
		default:
			return state;
	}
}

export default Reducer;