const initialState = {
	workers: [
			{name: 'Bob', surname: 'Meljanski', salary: 5140, sex: 'male'},
			{name: 'Michel', surname: 'Hensson', salary: 5420, sex: 'male'},
			{name: 'Jane', surname: 'Mitchel', salary: 2054, sex: 'female'},
			{name: 'Rebeka', surname: 'Wotson', salary: 4470, sex: 'female'},
			{name: 'Max', surname: 'Payton', salary: 3920, sex: 'male'},
			{name: 'Mary', surname: 'Siberg', salary: 4580, sex: 'female'},
			{name: 'Jakline', surname: 'Cliny', salary: 5054, sex: 'female'},
			{name: 'Rose', surname: 'Ritingale', salary: 4770, sex: 'female'},
			{name: 'Miki', surname: 'Dorryl', salary: 3840, sex: 'male'},
			{name: 'Roby', surname: 'Souzi', salary: 5120, sex: 'male'},
			{name: 'Jessica', surname: 'Vitousse', salary: 2954, sex: 'female'},
			{name: 'Witney', surname: 'Routson', salary: 5470, sex: 'female'},
			{name: 'Mark', surname: 'Hayton', salary: 4920, sex: 'male'}
		],
      currentPage: 1, // страница показа
      workersPerPage: 3 // количество выдаваемых элементов в таблице
}

const Reducer = (state = initialState, action) => {
	switch(action.type){
		case 'VALUE_CLICKED_ITEM':
			return {
				...state,
				currentPage: action.value
			}
		default:
			return state;
	}
}

export default Reducer;