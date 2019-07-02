// func creating arrays 
const getArray = (a, b) =>{
	var arr = [];
	for(var i=a; i <= b; i++){
		arr.push(i);
	}
	return arr;
}
const initialState = {
	dates: getArray(1, 31),
	months: getArray(0, 11),
	years: getArray(1901, (new Date()).getFullYear()),
	valueSelectDate: (new Date()).getDate(),
	valueSelectMonth: (new Date()).getMonth(),
	valueSelectYear: (new Date()).getFullYear()
}
const Reducer = (state = initialState, action) => {
	switch(action.type){
		case 'ADD_VALUE_SELECT_DATE':
			return{
				...state,
				valueSelectDate: action.value
			}
		case 'ADD_VALUE_SELECT_MONTH':
			return{
				...state,
				valueSelectMonth: action.value
			}
		case 'ADD_VALUE_SELECT_YEAR':
			return{
				...state,
				valueSelectYear: action.value
			}
		default:
			return state;
	}
}

export default Reducer;