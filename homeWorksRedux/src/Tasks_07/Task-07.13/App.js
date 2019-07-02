import React from 'react';
import { connect } from 'react-redux';
import Task from './Task';
import {dateValueAction, monthValueAction, yearValueAction} from './actions';
import '../../App.css';

const App = (props) => {

    const { 
        storeToTask, 
        dateSelectValueToTask,
        monthSelectValueToTask,
        yearSelectValueToTask } = props;

    return (
        <div className="App-header">
            <Task 
                storeFromApp={storeToTask} 
                addSelectValueDate={dateSelectValueToTask} 
                addSelectValueMonth={monthSelectValueToTask} 
                addSelectValueYear={yearSelectValueToTask}/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return ({ storeToTask: state })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        dateSelectValueToTask: (name) => dispatch(dateValueAction(name)),
        monthSelectValueToTask: (name) => dispatch(monthValueAction(name)),
        yearSelectValueToTask: (name) => dispatch(yearValueAction(name))
    })
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);