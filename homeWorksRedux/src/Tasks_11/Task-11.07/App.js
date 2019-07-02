import React from "react";
import {connect} from 'react-redux';
import {addZero} from './reducers';

import AddNote from './Components/addNote';
import AppHeader from './Components/appHeader';
import FilterPanel from './Components/filterPanel';
import ListNotes from './Components/listNotes';
import SearchPanel from './Components/searchPanel';
import CalendarPanel from './Components/calendarPanel';
import CalendarHeader from './Components/calendarHeader';

import {
	handlerInputAction,
 	AddNewNoteAction,
 	buttonsOperationAction,
 	saveEditNoteAction,
 	handlerFilterAction,
 	handlerButtonsHeaderAction,
 	tdHandlerClickAction} from './actions';

import '../../App.css';

const App = (props) => {

	const { 
		storeToTask, 
		handlerInputFromApp, 
		AddNewNoteFromApp,
		buttonsOperationFromApp,
		saveEditNoteFromApp,
		handlerFilterFromApp,
		handlerButtonsHeaderFromApp,
		tdHandlerClickFromApp } = props;

	const { 
		notes, 
		buttonsArr, 
		valueInput, 
		searchInput, 
		filter,
		date,
		month,
		year } = storeToTask;

	// фильтрация массива заметок по активному фильтру
	const filterNotes = (arr, status) => {
		const newArr = arr.filter((item)=>{
			let qqq;
			if(status === 'done'){ qqq = item.done;}
			if(status === 'active'){ qqq = !item.done;}
			if(status === 'important'){ qqq = item.important;}
			if(status === 'all') {qqq = arr;}
			if(status === 'total') {qqq = arr;}
			return qqq;
		});
		return newArr;
	}

	// metod реализации поиска
  	const searchItems = (items, string) => {
  		
	    if (string.length === 0) {
			// все записи без учёта сортировки по дате
			if(filter === 'total'){
				return notes;
			}
			// сортирова по дате  
		  	const dateCrnt = date+"."+addZero(month+1)+"."+year;
			return items.filter(item => {
			  	return item.datetime.toLowerCase().indexOf(dateCrnt) > -1;
			})

		} else{
			return items.filter(item => {
			  	return item.note.toLowerCase().indexOf(string.toLowerCase()) > -1;
			});
		}
		
  	};

// создание календаря
	const createCalendar = (year, month) => {

		var mon = month;
		var d = new Date(year, mon);

		var table = '<tr>';

		for (let i = 0; i < getDay(d); i++) {
			table += '<td></td>';
		}

		while (d.getMonth() === mon) {
			let classNames = '';
			if(
				mon === (new Date()).getMonth() && 
				d.getDate() === (new Date()).getDate() &&
				year === (new Date()).getFullYear()){
					classNames = 'class=todayTd';
			}
			table += '<td name='+d.getDate()+' '+classNames+'>' + d.getDate() + '</td>';

			if (getDay(d) % 7 === 6) { 
			  	table += '</tr><tr>';
			}

			d.setDate(d.getDate() + 1);
		}

		if (getDay(d) !== 0) {
			for (let i = getDay(d); i < 7; i++) {
			  	table += '<td></td>';
			}
		}

		table += '</tr>';

	    function getDay(date) {
			var day = date.getDay();
			if (day === 0) day = 7;
			return day - 1;
	    }
	    return table;
    }

	// проверяем элементы входящего массива на совпадение со значением searchInput
	const arrAfterSearch = searchItems(notes, searchInput);

	// определяем массив заметок для рендеринга
	const visibleItems = filterNotes(arrAfterSearch, filter);

	return(
    <div className="App-header">
		<div className="container">
			<div className="row">
				<div className="col-md-7">
					<AppHeader
						date={date}
						month={month}
						year={year}/>
					<div className="list-group-item top-panel">
						<FilterPanel
							notes={notes}
							visibleItems={visibleItems}
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
				<div className="col-md-4">
					<CalendarHeader
						date={date}
						month={month}
						year={year}
						handlerButtons={handlerButtonsHeaderFromApp}/>
					<CalendarPanel
						month={month}
						year={year}
						tdHandlerClick={tdHandlerClickFromApp}
						createCalendar={createCalendar}/>
				</div>
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
		handlerButtonsHeaderFromApp: (name) => {
			dispatch(handlerButtonsHeaderAction(name))
		},
		tdHandlerClickFromApp: (elem, filter) => {
			dispatch(tdHandlerClickAction(elem, filter))
		},
	})
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)
