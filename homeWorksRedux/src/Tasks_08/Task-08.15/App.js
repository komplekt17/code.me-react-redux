import React from 'react';
import { connect } from 'react-redux';
import Task from './Task';
import {selectValueAction} from './actions';
import '../../App.css';

const App = ({ storeToTask, selectValueToTask, getCulcVolume, getCourses }) => {
    return (
        <div className="App-header">
            <Task 
                storeFromApp={storeToTask} 
                addSelectValue={selectValueToTask}
                getCulcVolume={getCulcVolume}
                getCourses={getCourses}/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return ({ storeToTask: state })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        selectValueToTask: (value, name) => dispatch(selectValueAction(value, name)),
        getCulcVolume: (valueFrom, valueTo, size) => {
            dispatch(getCulcVolumeAction(valueFrom, valueTo, size))},
        getCourses: () => dispatch(getCoursesAction())
    })
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);