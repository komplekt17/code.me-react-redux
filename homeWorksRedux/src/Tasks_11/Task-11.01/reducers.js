const initialState = {
	workers: [
		{name: 'Bob', surname: 'Meljanski', salary: 514.0, days: 20},
		{name: 'Michel', surname: 'Hensson', salary: 542.0, days: 19},
		{name: 'Jane', surname: 'Mitchel', salary: 205.4, days: 21},
		{name: 'Rebeka', surname: 'Wotson', salary: 447.0, days: 22},
		{name: 'Max', surname: 'Payton', salary: 392.0, days: 20},
		{name: 'Mary', surname: 'Siberg', salary: 458.0, days: 19},
		{name: 'Jakline', surname: 'Cliny', salary: 505.4, days: 18},
		{name: 'Rose', surname: 'Ritingale', salary: 477.0, days: 19},
		{name: 'Miki', surname: 'Dorryl', salary: 384.0, days: 22},
		{name: 'Roby', surname: 'Souzi', salary: 512.0, days: 21},
		{name: 'Jessica', surname: 'Vituse', salary: 295.4, days: 20},
		{name: 'Witney', surname: 'Routson', salary: 547.0, days: 21},
		{name: 'Mark', surname: 'Hayton', salary: 492.0, days: 18}
	]
}

const handlerInput = (state, index, name, value) => {
	if(value < 0) value = 0;
	const arr = state.workers.slice();
	if(name === 'salary'){
		arr[index].salary = value;
	}else arr[index].days = value;
	
	return arr;
}

const Reducer = (state = initialState, action) => {
	switch(action.type){
		case 'HANDLER_INPUTS':
			return({
				workers: handlerInput(
									state, 
									action.index, 
									action.name, 
									action.value)
			})
		default:
			return state;
	}
}

export default Reducer;