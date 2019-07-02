import React, {Component} from "react";
import ListNotes from './dopComponents-11.06/listNotes-11.06';
import AddNote from './dopComponents-11.06/addNote-11.06';
import SearchPanel from './dopComponents-11.06/searchPanel-11.06';
import FilterPanel from './dopComponents-11.06/filterPanel-11.06';
import {AppHeader} from './dopComponents-11.06/appHeader-11.06';
/*
	11-06. Реализуйте TODO-лист (чеклист). В нем должен быть список задач, которые хочет сделать пользователь. Задачу можно добавить, удалить, поредактировать. Кроме того, рядом с каждой задачей должен быть чекбокс, с помощью которого можно отметить эту задачу сделанной. Сделанная задача не удаляется из списка, а становится перечеркнутой (перечеркнуть текст можно с помощью text-decoration).
*/

class Task extends Component{

	state = {
		notes: [
			{
				note: 'Make homework React', 
				done: false, 
				important: true,
				visible: true
			},
			{
				note: 'Create homework Redux', 
				done: true, 
				important: false,
				visible: true
			},
			{
				note: 'Get a react`s practice', 
				done: false, 
				important: false,
				visible: true
			},
			{
				note: 'Have a lunch', 
				done: false, 
				important: false,
				visible: true
			}
		],
  		buttonsArr: [
		    { nameFilter: "all", labelFilter: "All" },
		    { nameFilter: "active", labelFilter: "Active" },
		    { nameFilter: "important", labelFilter: "Important" },
		    { nameFilter: "done", labelFilter: "Done" }
  		],
		valueInput: '',
		filter: 'all',
		searchInput: ''
	}
// обработчик значения полей input
	handlerInput = (ev) => {
		const idx = ev.target.id;
		if(ev.target.name === 'addNote'){
			this.setState({valueInput: ev.target.value})
		}else if(ev.target.name === 'editNote'){
			const arr = this.state.notes.slice();
			arr[idx].note = ev.target.value;
			this.setState({notes: arr});
		}else{
			this.setState({searchInput: ev.target.value})
		}
	}
// обработчик добавления новой заметки
	handlerClickAddNote = (ev) => {
		ev.preventDefault();
		if(this.state.valueInput === ''){
			alert('You must enter some note')
		}else{
			const newNote = {
				note: this.state.valueInput,
				done: false,
				important: false,
				visible: true
			}
			const arr = this.state.notes.slice();
			arr.push(newNote);
			this.setState({
				notes: arr,
				valueInput: '' 
			});
		}
	}
// активация поля для редактирования
	editNote = (idx) => {
		const arr = this.state.notes.slice();
		arr[idx].visible = !arr[idx].visible;
		this.setState({notes: arr});
	}
// сохранение заметки после редактирования
	saveEditNote = (idx) => {
		const arr = this.state.notes.slice();
		if(arr[idx].note !== ''){
			arr[idx].visible = !arr[idx].visible;
			arr[idx].done = false;
			this.setState({notes: arr});
		}else alert("This field can not empty");
	}
// удаление заметки
	deleteNote = (idx) => {
		const arr = this.state.notes.slice();
		arr.splice(idx, 1);
		this.setState({notes: arr});
	}
// клик по кнопке важное/неважное
	importantNote = (idx) => {
		const arr = this.state.notes.slice();
		arr[idx].important = !arr[idx].important;
		this.setState({notes: arr});
	}
// клик по заметке выполненоне/выполнено
	onToggleDone = (idx) => {
		const arr = this.state.notes.slice();
		arr[idx].done = !arr[idx].done;
		this.setState({notes: arr});
	}
// подсвечивание кнопки активного фильтра
	onFilter = (idx) => {
		let filter = '';

		if(this.state.buttonsArr[idx].nameFilter === 'all'){
			filter = 'all'
		}
		if(this.state.buttonsArr[idx].nameFilter === 'active'){
			filter = 'active'
		}
		if(this.state.buttonsArr[idx].nameFilter === 'important'){
			filter = 'important'
		}
		if(this.state.buttonsArr[idx].nameFilter === 'done'){
			filter = 'done'
		}
		
 		this.setState({filter: filter});
	}

// фильтрация массива заметок по активному фильтру
	filterNotes = (arr, status) => {
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
	searchItems = (items, string) => {
		if (string.length === 0) {
		  return items;
		}
		return items.filter(item => {
		  	return item.note.toLowerCase().indexOf(string.toLowerCase()) > -1;
		});
	}

	render(){
		const { notes, valueInput, searchInput, buttonsArr, filter } = this.state;
		// проверяем элементы входящего массива на совпадение со значением searchInput
		const arrAfterSearch = this.searchItems(notes, searchInput);
		// определяем массив заметок для рендеринга
		const visibleItems = this.filterNotes(arrAfterSearch, filter);
		return(
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<AppHeader/>
						<div className="list-group-item top-panel">
							<FilterPanel
								notes={notes}
								filterNotes={this.filterNotes} 
								buttonsArr={buttonsArr} 
								filter={filter}
								onFilter={this.onFilter}/>
							<SearchPanel
								handlerInput={this.handlerInput}
								SearchInput={searchInput}/>
						</div>
						<ListNotes
							visibleItems={visibleItems}
							onToggleDone={this.onToggleDone}
							editNote={this.editNote}
							deleteNote={this.deleteNote}
							handlerInput={this.handlerInput}
							importantNote={this.importantNote}
							saveEditNote={this.saveEditNote}/>
						<AddNote
							valueInput={valueInput}
							handlerInput={this.handlerInput}
							handlerClickAddNote={this.handlerClickAddNote}/>
					</div>
				</div>
			</div>
		);
		
	}
}

export default Task;