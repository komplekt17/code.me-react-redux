import React from 'react';
import { connect } from 'react-redux';
import Task from './Task';
import { 
    selectValueAction, 
    addNewNoteAction, 
    editNoteAction, 
    deleteNoteAction, 
    saveNoteAction } from './actions';
import '../../App.css';

const App = (props) => {

    const { 
        storeToTask, 
        selectValueToTask, 
        addNoteToTask, 
        editNoteToTask, 
        deleteNoteToTask, 
        saveNoteToTask} = props;

    return (
        <div className="App-header">
            <Task 
                storeFromApp={storeToTask} 
                addSelectValue={selectValueToTask}
                addNoteFromApp={addNoteToTask} 
                editNoteFromApp={editNoteToTask}
                deleteNoteFromApp={deleteNoteToTask}
                saveNoteFromApp={saveNoteToTask}/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return ({ storeToTask: state })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        selectValueToTask: (value, name) => dispatch(selectValueAction(value, name)),
        addNoteToTask: (header, text) => dispatch(addNewNoteAction(header, text)),
        editNoteToTask: (idx) => dispatch(editNoteAction(idx)),
        deleteNoteToTask: (idx) => dispatch(deleteNoteAction(idx)),
        saveNoteToTask: (header, text, idx) => dispatch(saveNoteAction(header, text, idx))
    })
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);