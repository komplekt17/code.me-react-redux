import axios from 'axios';

const selectValueAction = (number, text) => { 
	return ({
		type: 'GET_VALUE_FIELDS',
		value: number,
		name: text
	})
}

const getCulcVolumeAction = (valueFrom, valueTo, size) => {
	return {
		type: 'GET_CALCULETED_VOLUME',
		valueFrom, valueTo, size
	}
}

const getCoursesAction = () => {
  	return (dispatch) =>{
      dispatch({
        type: 'LOAD_COURSES_REQUESTED'
      });
    	axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
  		.then((response) => {
    			dispatch({ 
    				type: 'GET_COURSES_SUCCESS', 
    				result: response
    			})
  		})
      .catch((error)=> {
          dispatch({
            type: 'GET_COURSES_FAILURE', 
            payload: error
          });
      })
    }
}
// from here:   http://qaru.site/questions/359994/handling-async-request-with-react-redux-and-axios

export {selectValueAction, getCulcVolumeAction, getCoursesAction};