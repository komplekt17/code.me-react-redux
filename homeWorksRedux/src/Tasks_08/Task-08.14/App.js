import React from 'react';
import { connect } from 'react-redux';
import Task from './Task';
import {saveInputAction, addCityAction} from './actions';
import '../../App.css';

const App = ({ storeToTask, selectValueToTask, selectSortingToTask }) => {
    return (
        <div className="App-header">
            <Task 
                storeFromApp={storeToTask} 
                addSelectValue={selectValueToTask}
                addSortingItem={selectSortingToTask}/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return ({ storeToTask: state })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        selectValueToTask: (text, name) => dispatch(saveInputAction(text, name)),
        selectSortingToTask: (city) => dispatch(addCityAction(city))
    })
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);