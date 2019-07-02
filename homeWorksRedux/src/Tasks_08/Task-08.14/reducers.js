const initialState = {
	cities: [],
	input: '',
	selectedCity: ''
}

const handlerValue = (value, name) => {

	if(name === 'input') return value;
	if(name === 'select') return value;
}

const handleClick = (state, text) => {
		const arr = state.cities.slice();
		arr.push(text)
		return arr;
	}

const Reducer = (state = initialState, action) => {

	switch(action.type){
		case 'SAVE_VALUE_INPUT':
			if(action.name === 'input'){
				return {
					...state,
					input: handlerValue(action.value, action.name)
				}
			}else{
				return {
					...state,
					selectedCity: handlerValue(action.value, action.name)
				}
			}
			
		case 'ADD_NEW_CITY':
			return {
				...state,
				cities: handleClick(state, action.valueSelect),
				input: ''
			}
		default:
			return state;
	}
}

export default Reducer;

