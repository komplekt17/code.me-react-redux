import React from 'react';
import { connect } from 'react-redux';
import Task from './Task';
import { selectValueAction, saveNewWorkerAction } from './actions';
import '../../App.css';

const App = ({ storeToTask, selectValueToTask, saveWorkerToTask }) => {
    return (
        <div className="App-header">
            <Task 
                storeFromApp={storeToTask} 
                addSelectValue={selectValueToTask}
                saveWorker={saveWorkerToTask}/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return ({ storeToTask: state })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        selectValueToTask: (value, name) => dispatch(selectValueAction(value, name)),
        saveWorkerToTask: (firstName, surname, salary, option) => {
            dispatch(saveNewWorkerAction(firstName, surname, salary, option))
        }
    })
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);