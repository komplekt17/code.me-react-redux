const initialState = {
    Date: "",
    PreviousDate: "",
    PreviousURL: "",
    Timestamp: "",
    Valute: {
        "USD": {
            "ID": "R01235",
            "NumCode": "840",
            "CharCode": "USD",
            "Nominal": 1,
            "Name": "Доллар США",
            "Value": 64.7919,
            "Previous": 65.0395
        },
        "EUR": {
            "ID": "R01239",
            "NumCode": "978",
            "CharCode": "EUR",
            "Nominal": 1,
            "Name": "Евро",
            "Value": 73.2148,
            "Previous": 73.2605
        }
    },
    selectFrom: 'start',
    selectTo: 'start',
    inputSize: '',
    culcVolume: '',
    loading: false,
    loaded: false,
    error: null
}

const getVolume = (state, valueFrom, valueTo, size) => {

    const coust1 = Object.values(state.Valute)[valueFrom].Value;
    const coust2 = Object.values(state.Valute)[valueTo].Value;
    const result = "You will receive: " + 
    parseFloat(size/coust1*coust2).toFixed(2) + " " + 
    Object.values(state.Valute)[valueTo].CharCode;

    return result;
}


const Reducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_VALUE_FIELDS':
            
            if(action.name === 'selectFrom'){
                return {
                    ...state,
                    selectFrom: action.value
                }
            }
            else if(action.name === 'selectTo'){
                return {
                    ...state,
                    selectTo: action.value
                }
            }
            else{
                return {
                    ...state,
                    inputSize: action.value
                }
            }
        
        case 'GET_CALCULETED_VOLUME':
            return{
                ...state,
                selectFrom: 'start',
                selectTo: 'start',
                inputSize: '',
                culcVolume: getVolume(state, action.valueFrom, action.valueTo, action.size)
            }

        case 'LOAD_COURSES_REQUESTED': 
            return {
                ...state,
                loading: true,
                loaded: false
            }
        case 'GET_COURSES_SUCCESS':
            return{
                ...state,
                Date: action.result.data.Date,
                PreviousDate: action.result.data.PreviousDate,
                PreviousURL: action.result.data.PreviousURL,
                Timestamp: action.result.data.Timestamp,
                Valute: action.result.data.Valute,
                loading: false,
                loaded: true,
                error: null
            }
        case 'GET_COURSES_FAILURE':
            return{
                ...state,
                isFetching: !action.fetching,
                loading: false,
                loaded: true,
                error: action.payload
            }
            
        default:
            return state;
    }
}

export default Reducer;