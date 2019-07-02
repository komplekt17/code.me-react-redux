import React from 'react';
import {connect} from 'react-redux';
import {handlerInputAction} from './actions';
import Task from './Task';
import '../../App.css';

const App = ({storeToTask, handlerInputToTask}) => {
	return(
		<Task 
			storeFromApp={storeToTask} 
			handlerInput={handlerInputToTask}/>
	)
}

const mapStateToProps = (state) => {
	return ({ storeToTask: state })
}

const mapDispatchToProps = (dispatch) => {
	return{
		handlerInputToTask: (index, name, value) => {
			dispatch(handlerInputAction(index, name, value))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
