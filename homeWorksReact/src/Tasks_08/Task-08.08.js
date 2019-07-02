import React, { Component } from "react";
/*
	8-08. Дан текстареа и кнопка. В текстареа пользователь нашего сайта будет вводить свои заметки. После нажатия на кнопку введенный текст должен появится под текстареа в виде блока div. Таких заметок может быть много. В каждой заметке должен стоять заголовок (заметка1, заметка2 и так далее), время создания заметки (часы, минуты, секунды), а также должна быть кнопка 'удалить' и кнопка 'редактировать'.

*/

class Tasks extends Component {

	state = {
		notes: [],
		headerBase: '',
		textBase: '',
		edit: -1
	}

	addNote = () => {
		if(this.state.headerBase !== '' && this.state.textBase !== ''){
			const time = this.getCurrentTime();
			const arrayItem = {
				header: this.state.headerBase,
				text: this.state.textBase,
				time: time
			}
			
			this.state.notes.push(arrayItem);
			this.setState({
				headerBase: '',
				textBase: ''
			});
			
		}else alert('You must complete all fields')

	}
	// удаление записи
	deleteNote = (idx) => {
		const arr = this.state.notes.splice(idx, 1);
		this.setState(arr);
	}
	// редактирование записи
	editNote = (idx) => {
		const headerEdit = this.state.notes[idx].header;
		const textEdit = this.state.notes[idx].text;
		this.setState({
			// idx неотрицательный
			//( == {index} записи) - значит открываем редактирование
			edit: idx, 
			headerBase: headerEdit,
			textBase: textEdit
		});
		// скрываем-открываем кнопки
		let elem = document.getElementsByClassName('time-buttons');
		elem[idx].classList.toggle("done-3");
	}
	// сохранение редактируемой записи
	saveNote = () => {
		const id = this.state.edit;
		const newArray = this.state.notes.slice(); // копируем стейт
		//console.log(id);
    	newArray[id].header = this.state.headerBase; // изменяем свойство
    	newArray[id].text = this.state.textBase; // изменяем свойство
    	// закрываем редактирование - передаём отрицательное значение
    	newArray.edit = -1;
    	// очищаем поля формы
    	newArray.headerBase = '';
    	newArray.textBase = '';

    	this.setState(newArray); // обновляем стейт

		// скрываем-открываем кнопки
		let elem = document.getElementsByClassName('time-buttons');
		elem[id].classList.toggle("done-3");
	}

	changeInput = (ev) => {
		this.setState({headerBase: ev.target.value})
	}

	changeText = (ev) => {
		this.setState({textBase: ev.target.value})
	}
	// получение текущего времени
	getCurrentTime = () => {
	    let date = new Date();
	    let hh = date.getHours();
	    let mm = date.getMinutes();
	    let ss = date.getSeconds();
	    if (hh < 10) hh = "0" + hh;
	    if (mm < 10) mm = "0" + mm;
	    if (ss < 10) ss = "0" + ss;
		let result = `${hh}:${mm}:${ss}`;
	    return result;
    }

	render(){
		const listNotes = this.state.notes.map((item, index)=>{
			return(
				<div key={index}>
					<h3>{index+1}. {item.header}</h3>
					<div>{item.text}</div>
					<div className="time">
						<div>Creating time: {item.time}</div>
						<div className="time-buttons">
			              	<button
				                className="btn btn-outline-success btn-sm"
				                onClick={() => this.editNote(index)}>
				                <i className="fa fa-edit" />
			              	</button>
			              	<button
				                className="btn btn-outline-danger btn-sm"
				                onClick={() => this.deleteNote(index)}>
				                <i className="fa fa-trash" />
			             	 </button>
			            </div>
					</div>
				</div>
			);
		});
		return(
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<form className="form-group" onSubmit={(ev) => ev.preventDefault()}>
							<input 
								className="form-control" 
								type="text" 
								value={this.state.headerBase}
								onChange={this.changeInput}/>
							<textarea 
								name="" rows="5"
								className="form-control" 
								value={this.state.textBase} 
								onChange={this.changeText}/>
							{this.state.edit < 0 ?
								<button 
									className="btn btn-info btn-block"
									onClick={this.addNote}>
									Add Note
								</button>
							:
								<button 
									className="btn btn-success btn-block"
									onClick={this.saveNote}>
									Save Note
								</button>}
						</form>
					</div>
					<div className="col-md-6">
						<div className="notes">
							{this.state.notes.length !== 0 ? 
								listNotes : 'no notes'}
						</div>
					</div>
				</div>
			</div>
			
		);
	}
}

export default Tasks;
