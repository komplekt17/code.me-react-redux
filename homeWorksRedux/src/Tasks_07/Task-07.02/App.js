import React from 'react';
import { connect } from 'react-redux';

import AddCheckboxText from './actions';
import Task from './Task';
import '../../App.css';

let App = ({ storeApp, addPropsChecked }) => {
    return (
        <div className="App-header">
            <Task storeFromApp={storeApp} actionFromApp={addPropsChecked}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        storeApp: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPropsChecked: (name) => dispatch(AddCheckboxText(name))
    }
}

App = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default App;