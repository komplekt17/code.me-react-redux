import React from 'react';
import { connect } from 'react-redux';
import {inputValueAction, handleClickAction} from './actions'
import TestResult from "./Components/testResult";
import TestPage from "./Components/testPage";
import TestTotal from "./Components/testTotal";
import '../../App.css';

const App = ({storeToTask, inputValueToTask, handleClickToTask}) => {

	const getAnswers = () => {
		const arr = storeToTask.test.slice();
		let count = 0;
		for(var i=0; i<arr.length; i++){
			if (arr[i].right === arr[i].check) count += 1;
		}
		return count;
	}

	const {test, done} = storeToTask;
    
    return (
    	<div className="App-header">
	      	<div className="container">
		        <div className="row">
		          	<div className="col-md-6">
		      		{done ?
		  				<TestResult test={test} />
		  				:
		  				<TestPage 
							test={test} 
							handlerValue={inputValueToTask} 
							handleClick={handleClickToTask}/> 
			      	}
		          	</div>
		          	<div className="col-md-6">
		          	{done ?
		      			<TestTotal 
		      				totalQuestions={test.length}
		      				totalAnswers={getAnswers()}/> 
		      			: ''
		          	}
		          	</div>
		      	</div>
	      	</div>
    	</div>
    );
}

const mapStateToProps = (state) => {
	return ({ storeToTask: state })
}

const mapDispatchToProps = (dispatch) => {
	return {
		inputValueToTask: (idx, value) => dispatch(inputValueAction(idx, value)),
		handleClickToTask: (inx, value)  => dispatch(handleClickAction(inx, value))
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);