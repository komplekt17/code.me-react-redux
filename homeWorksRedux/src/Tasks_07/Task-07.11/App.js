import React from 'react';
import { connect } from 'react-redux';
import Task from './Task';
import { selectValueAction, inputValueAction, addInputValueAction} from './actions';
import '../../App.css';

const App = ({ storeToTask, selectValueToTask, inputValueToTask, addInputValueToTask}) => {
    return (
        <div className="App-header">
            <Task 
                storeFromApp={storeToTask} 
                addSelectValue={selectValueToTask}
                addInputValue={inputValueToTask}
                addInputArray={addInputValueToTask}/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return ({ storeToTask: state })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        selectValueToTask: (number) => dispatch(selectValueAction(number)),
        inputValueToTask: (name) => dispatch(inputValueAction(name)),
        addInputValueToTask: (item) => dispatch(addInputValueAction(item))
    })
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);