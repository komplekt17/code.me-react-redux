import React from 'react';
import { connect } from 'react-redux';
import Task from './Task';
import {selectValueAction, selectSortingAction} from './actions';
import '../../App.css';

const App = ({ storeToTask, selectValueToTask, selectSortingToTask }) => {
    return (
        <div className="App-header">
            <Task 
                storeFromApp={storeToTask} 
                addSelectValue={selectValueToTask}
                selectSorting={selectSortingToTask}/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return ({ storeToTask: state })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        selectValueToTask: (text) => dispatch(selectValueAction(text)),
        selectSortingToTask: (value) => dispatch(selectSortingAction(value))
    })
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);