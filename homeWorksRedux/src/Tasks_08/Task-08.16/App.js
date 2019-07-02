import React from 'react';
import { connect } from 'react-redux';
import Task from './Task';
import selectValueAction from './actions';
import '../../App.css';

const App = ({ storeToTask, selectValueToTask }) => {
    return (
        <div className="App-header">
            <Task 
                storeFromApp={storeToTask} 
                addSelectValue={selectValueToTask}/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return ({ storeToTask: state })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        selectValueToTask: (value) => dispatch(selectValueAction(value))
    })
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);