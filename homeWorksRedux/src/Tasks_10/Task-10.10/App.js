import React from 'react';
import { connect } from 'react-redux';
import EnterFruit from './Components/EnterFruit';
import TableFruits from './Components/TableFruits';
import {
    saveValueInputAction,
    handlerCheckboxAction,
    addNewFrutAction,
    deleteFruitAction
} from './actions'
import '../../App.css'

const App = (props) => {

    const {
        storeToTask,
        saveValueInputToTask,
        addNewFrutToTask,
        handlerCheckboxToTask,
        deleteFruitToTask
    } = props;

    return (
        <div className="App-header">
    		<div className="container">
    			<div className="row">
    				<EnterFruit 
    					storeFromApp={storeToTask} 
    					saveValueInput={saveValueInputToTask}
    					addNewFrut={addNewFrutToTask}/>	
    				<TableFruits 
    					storeFromApp={storeToTask} 
    					handlerCheckbox={handlerCheckboxToTask}
    					deleteFruit={deleteFruitToTask}/>
    			</div>
    		</div>
    	</div>
    );
}

const mapStateToProps = (state) => {
    return ({ storeToTask: state })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        saveValueInputToTask: (name, value) => dispatch(saveValueInputAction(name, value)),
        handlerCheckboxToTask: (idx) => dispatch(handlerCheckboxAction(idx)),
        addNewFrutToTask: (input1, input2, input3) => {
        	dispatch(addNewFrutAction(input1, input2, input3))
        },
        deleteFruitToTask: (idx) => dispatch(deleteFruitAction(idx))
    })
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);