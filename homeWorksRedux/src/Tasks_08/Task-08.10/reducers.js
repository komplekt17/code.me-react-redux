const initialState = {
		en: [
			'monday', 
			'tuesday', 
			'wednesday', 
			'thursday', 
			'friday', 
			'saturday', 
			'sunday'],
		ru: [
			'понедельник', 
			'вторник',  
			'среда', 
			'четверг', 
			'пятница',  
			'суббота', 
			'воскресенье'],
		option: 'ru'
	}

const Reducer = (state = initialState, action) => {
	switch(action.type){
		case 'VALUE_CLICKED_ITEM':
			return {
				...state,
				option: action.value
			}
		default:
			return state;
	}
}

export default Reducer;