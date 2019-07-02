import React from "react";
import { connect } from "react-redux";
import addTextAction from "./actions";
import Task from "./Task";
import '../../App.css';

const App = ({ storeAppText, addTextFromApp }) => {
    return (
        <div className="App-header">
          <Task addTextFromApp={storeAppText} addTextProps={addTextFromApp} />
      </div>
    );
};

const mapStateToProps = state => {
    return {
        storeAppText: state
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addTextFromApp: (name) => dispatch(addTextAction(name))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);