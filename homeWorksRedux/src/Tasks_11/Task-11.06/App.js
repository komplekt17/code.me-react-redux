import React from "react";
import {connect} from 'react-redux';

import AddNote from './Components/addNote';
import AppHeader from './Components/appHeader';
import FilterPanel from './Components/filterPanel';
import ListNotes from './Components/listNotes';
import SearchPanel from './Components/searchPanel';

import {
	handlerInputAction,
 	AddNewNoteAction,
 	buttonsOperationAction,
 	saveEditNoteAction,
 	handlerFilterAction} from './actions';

import '../../App.css';

const App = (props) => {

	const { 
		storeToTask, 
		handlerInputFromApp, 
		AddNewNoteFromApp,
		buttonsOperationFromApp,
		saveEditNoteFromApp,
		handlerFilterFromApp } = props;

	const { notes, buttonsArr, valueInput, searchInput, filter } = storeToTask;

	// фильтрация массива заметок по активному фильтру
	const filterNotes = (arr, status) => {
		const newArr = arr.filter((item)=>{
			let qqq;
			if(status === 'done'){ qqq = item.done;}
			if(status === 'active'){ qqq = !item.done;}
			if(status === 'important'){ qqq = item.important;}
			if(status === 'all') {qqq = arr;}
			return qqq;
		});
		return newArr;
	}

	// metod реализации поиска
  	const searchItems = (items, string) => {
	    if (string.length === 0) return items;
	    else return items.filter(item => {
	      	return item.note.toLowerCase().indexOf(string.toLowerCase()) > -1;
	    });
  	};

	// проверяем элементы входящего массива на совпадение со значением searchInput
	const arrAfterSearch = searchItems(notes, searchInput);

	// определяем массив заметок для рендеринга
	const visibleItems = filterNotes(arrAfterSearch, filter);

	return(
		<div className="container">
			<div className="row">
				<div className="col-md-6">
					<AppHeader/>
					<div className="list-group-item top-panel">
						<FilterPanel
							notes={notes}
							filterNotes={filterNotes} 
							buttonsArr={buttonsArr} 
							filter={filter}
							onFilter={handlerFilterFromApp}/>
						<SearchPanel
							handlerInput={handlerInputFromApp}
							SearchInput={searchInput}/>
					</div>
					<ListNotes
						visibleItems={visibleItems}
						handlerInput={handlerInputFromApp}
						buttonsOperation={buttonsOperationFromApp}
						saveEditNote={saveEditNoteFromApp}/>
					<AddNote
						valueInput={valueInput}
						handlerInput={handlerInputFromApp}
						AddNewNote={AddNewNoteFromApp}/>
				</div>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return({ storeToTask: state })
}

const mapDispatchToProps = (dispatch) => {
	return({
		handlerInputFromApp: (name, value, idx) => {
			dispatch(handlerInputAction(name, value, idx))
		},
		AddNewNoteFromApp: (idx, text) => {
			dispatch(AddNewNoteAction(idx, text))
		},
		buttonsOperationFromApp: (name, idx) => {
			dispatch(buttonsOperationAction(name, idx))
		},
		saveEditNoteFromApp: (idx, text) => {
			dispatch(saveEditNoteAction(idx, text))
		},
		handlerFilterFromApp: (idx) => {
			dispatch(handlerFilterAction(idx))
		},
	})
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)
