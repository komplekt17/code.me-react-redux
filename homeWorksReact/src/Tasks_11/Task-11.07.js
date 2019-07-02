import React, {Component} from "react";
import ListNotes from './dopComponents-11.07/listNotes-11.07';
import AddNote from './dopComponents-11.06/addNote-11.06';
import SearchPanel from './dopComponents-11.06/searchPanel-11.06';
import FilterPanel from './dopComponents-11.06/filterPanel-11.06';
import {HeaderApp} from './dopComponents-11.06/appHeader-11.06';
import CalenderPanel from './dopComponents-11.07/calenderPanel-11.07';
import CalenderHeader from './dopComponents-11.07/calenderHeader-11.07';
/*
	11-07.  Реализуйте органайзер. Он должен представлять собой календарь за текущий месяц. По нажатию на определенную дату календаря мы должны увидеть список дел, запланированных на этот день. Каждое дело можно поредактировать, отметить сделанным или удалить, можно также добавить новое дело. Над календарем должны быть стрелочки 'назад' и 'вперед', с помощью которых можно сменить месяц и год в календаре.
*/

class Task extends Component{

	state = {
		notes: [
			{
				id: 0,
				note: 'Make homework React',
				datetime: '23.05.2019, 11:11',
				done: false, 
				important: true,
				visible: true
			},
			{
				id: 1,
				note: 'Create homework Redux',
				datetime: '23.05.2019, 16:12',
				done: true, 
				important: false,
				visible: true
			},
			{
				id: 2,
				note: 'Get a react`s practice',
				datetime: '26.05.2019, 14:32',
				done: false, 
				important: false,
				visible: true
			},
			{
				id: 3,
				note: 'Have a lunch',
				datetime: '22.05.2019, 11:12',
				done: false, 
				important: false,
				visible: true
			}
		],
  		buttonsArr: [
		    { nameFilter: "all", labelFilter: "All" },
		    { nameFilter: "active", labelFilter: "Active" },
		    { nameFilter: "important", labelFilter: "Important" },
		    { nameFilter: "done", labelFilter: "Done" },
		    { nameFilter: "total", labelFilter: "Total" }
  		],
		valueInput: '',
		filter: 'all',
		searchInput: '',
		date: (new Date()).getDate(),
		month: (new Date()).getMonth(),
		year: (new Date()).getFullYear()
	}
// обработчик значения полей input
	handlerInput = (ev) => {
		const idx = Number(ev.target.id);
		if(ev.target.name === 'addNote'){
			this.setState({valueInput: ev.target.value})
		}else if(ev.target.name === 'editNote'){
			const arr = this.state.notes.slice();
			// ищем заметку с id === ev.target.id
			for(let i=0; i<arr.length; i++){
				if(arr[i].id === idx){
					arr[i].note = ev.target.value;
				}
			}
			// обновляем стейт
			this.setState({notes: arr});		
		}else{
			this.setState({searchInput: ev.target.value})
		}
	}

	addZero = (val) => {
		var valString = val + "";
		if (valString.length < 2) {return "0" + valString;} 
		else {return valString;}
	}

	getTimeDate = () => {

		const d = this.state.date;
		const m =  this.addZero((new Date()).getMonth()+1);
		const y = (new Date()).getFullYear();
		const hh =  this.addZero((new Date()).getHours());
		const mm =  this.addZero((new Date()).getMinutes());

		return d+"."+m+"."+y+", "+hh+":"+mm;
	}

// метод генерации случайного id
  	getRandId() {
    	return Math.random();
  	}

// обработчик добавления новой заметки
	handlerClickAddNote = (ev) => {
		ev.preventDefault();
		if(this.state.valueInput === ''){
			alert('You must enter some note')
		}else{
			const newNote = {
				id: this.getRandId(),
				note: this.state.valueInput,
				datetime: this.getTimeDate(),
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
		//console.log(this.state.notes);
	}
// активация поля для редактирования
	editNote = (idx) => {
		const arr = this.state.notes.slice();
		// ищем заметку с id === idx
		for(let i=0; i<arr.length; i++){
			if(arr[i].id === idx){
				arr[i].visible = !arr[i].visible;
			}
		}
		this.setState({notes: arr});
	}
// сохранение заметки после редактирования
	saveEditNote = (idx) => {
		const arr = this.state.notes.slice();
		// ищем заметку с id === idx
		for(let i=0; i<arr.length; i++){
			if(arr[i].id === idx){
				if(arr[i].note !== ''){
					arr[i].visible = !arr[i].visible;
					arr[i].done = false;
					this.setState({notes: arr});
				}else alert("This field can not empty");
			}
		}
	}
// удаление заметки
	deleteNote = (idx) => {
		const arr = this.state.notes.slice();
		// ищем заметку с id === idx
		for(let i=0; i<arr.length; i++){
			if(arr[i].id === idx){
				arr.splice(i, 1);
				this.setState({notes: arr});
			}
		}
	}
// клик по кнопке важное/неважное
	importantNote = (idx) => {
		const arr = this.state.notes.slice();
		// ищем заметку с id === idx
		for(let i=0; i<arr.length; i++){
			if(arr[i].id === idx){
				arr[i].important = !arr[i].important;
				this.setState({notes: arr});
			}
		}
	}
// клик по заметке выполненоне/выполнено
	onToggleDone = (idx) => {
		const arr = this.state.notes.slice();
		// ищем заметку с id === idx
		for(let i=0; i<arr.length; i++){
			if(arr[i].id === idx){
				arr[i].done = !arr[i].done;
				this.setState({notes: arr});
			}
		}
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
		if(this.state.buttonsArr[idx].nameFilter === 'total'){
			filter = 'total'
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
			if(status === 'total') {qqq = arr;}
			return qqq;
		});
		return newArr;
	}

// metod реализации поиска
	searchItems = (items, string) => {
		if (string.length === 0) {
			// все записи без учёта сортировки по дате
			if(this.state.filter === 'total'){
				return this.state.notes;
			}
		// сортирова по дате  
		  	const dateCrnt = this.state.date+"."+this.addZero(this.state.month+1)+"."+this.state.year;
			return items.filter(item => {
			  	return item.datetime.toLowerCase().indexOf(dateCrnt) > -1;
			})

		} 
		return items.filter(item => {
		  	return item.note.toLowerCase().indexOf(string.toLowerCase()) > -1;
		});
	}

// создание календаря
	createCalendar = (year, month) => {

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

// обработчик кнопок календаря
    handlerButton = (ev) => {
    	const name = ev.target.getAttribute('name');
    	let month = this.state.month;
    	let year = this.state.year;

    	if(name === 'nextYear'){
    		this.setState({year: year+1})
    	}
    	else if(name === 'previuosYear'){
    		this.setState({year: year-1})
    	}
    	else if(name === 'nextMonth'){
    		if(month === 11) this.setState({month: 0, year: year+1})
			else this.setState({month: month+1})
    	}
    	else if(name === 'previuosMonth'){
			if(month === 0) this.setState({month: 11, year: year-1})
			else this.setState({month: month-1})
		}
		else this.setState({
			date: (new Date()).getDate(), 
			month: (new Date()).getMonth(), 
			year: (new Date()).getFullYear()})
    }

// обработчик клика по дате календаря
    tdHandlerClick = (ev) => {
    	const elem = Number(ev.target.getAttribute('name'));
    	const arrTr = ev.target.parentNode.parentNode.childNodes; 

    // перебор коллекции и сброс класса выделения	
    	for(let i = 0; i<arrTr.length; i++){
    		let arrTd = arrTr[i].childNodes;
    		for(let j = 0; j<arrTd.length; j++){
    			arrTd[j].classList.remove('activeTd');
    		}
    	}
    	
    	if(elem !== 0) {
    		this.setState({date: this.addZero(elem), filter: 'all'});
    		ev.target.classList.toggle('activeTd');
    	}
    }

	render(){
		const { 
			notes, 
			valueInput, 
			searchInput, 
			buttonsArr, 
			filter} = this.state;

		// проверяем элементы входящего массива на совпадение со значением searchInput
		const arrAfterSearch = this.searchItems(notes, searchInput);
		// определяем массив заметок для рендеринга
		const visibleItems = this.filterNotes(arrAfterSearch, filter);
		return(
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<HeaderApp
							date={this.state.date}
							month={this.state.month}
							year={this.state.year}/>
						<div className="list-group-item top-panel">
							<FilterPanel
								notes={notes}
								visibleItems={visibleItems}
								filterNotes={this.filterNotes} 
								buttonsArr={buttonsArr} 
								filter={filter}
								onFilter={this.onFilter}/>
							<SearchPanel
								handlerInput={this.handlerInput}
								SearchInput={searchInput}/>
						</div>
						<ListNotes 
							notes={visibleItems}
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
					<div className="col-md-4">
						<CalenderHeader
							date={this.state.date}
							month={this.state.month}
							year={this.state.year}
							handlerButton={this.handlerButton}/>
						<CalenderPanel
							month={this.state.month}
							year={this.state.year}
							tdHandlerClick={this.tdHandlerClick}
							createCalendar={this.createCalendar}/>
					</div>
				</div>
			</div>
		);
		
	}
}

export default Task;