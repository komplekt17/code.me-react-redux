const initialState = {
    fruits: [
        { name: 'apple', price: 3.1, quantity: 22, checked: true },
        { name: 'cucumber', price: 4.2, quantity: 17, checked: true },
        { name: 'carrot', price: 2.9, quantity: 15, checked: true },
        { name: 'banana', price: 4.5, quantity: 23, checked: true },
        { name: 'ananas', price: 5.1, quantity: 4, checked: true },
        { name: 'orange', price: 3.6, quantity: 15, checked: true },
    ],
    input1: '',
    input2: '',
    input3: '',
}

const handlerCheckbox = (state, item) =>{
    const arr = state.fruits.slice();
    // заменяем свойство .checked на обратное
    arr[item].checked = !state.fruits[item].checked;
    return arr;
}   

const deleteFruit = (state, idx) => {
    const arr = state.fruits.slice();
    arr.splice(idx, 1);
    return arr;
}   

const addNewFrut = (state, input1, input2, input3) => {
    // создаём объект
    const obj = {
        name: input1, 
        price: Number(input2), 
        quantity: Number(input3), 
        checked: false
    }
    const arr = state.fruits.slice();
    arr.push(obj);
    return arr;
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_VALUE_INPUT':
            if(action.name === 'input1')return({...state, input1: action.value}) 
            else if(action.name === 'input2')return({...state, input2: action.value}) 
            else return({...state, input3: action.value})
        case 'HANDLER_CHECKBOX':
            return({
                ...state,
                fruits: handlerCheckbox(state, action.item)
            }) 
        case 'ADD_NEW_FRUIT':
            return({
                ...state,
                fruits: addNewFrut(state, action.input1, action.input2, action.input3),
                input1: '',
                input2: '',
                input3: '',
            }) 
        case 'DELETE_FRUIT':
            return({
                ...state,
                fruits: deleteFruit(state, action.item)
            }) 

    	default:
    		return state
    }
}

export default Reducer;