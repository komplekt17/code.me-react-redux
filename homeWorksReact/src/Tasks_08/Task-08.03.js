import React, {Component} from 'react';
/*
	8-03. Дан массив. Выведите каждый элемент этого массива в отдельном абзаце. Сделайте так, чтобы над каждым абзацем был чекбокс, со следующим поведением: если он отмечен - абзац под ним есть на экране, а если не отмечен - абзаца нет. По умолчанию пусть все чекбоксы отмечены.
*/

class Tasks extends Component {

	state = {
		cities: [
			{name: 'Moscow', checked: true},
			{name: 'London', checked: true},
			{name: 'Paris', checked: true},
			{name: 'Berlin', checked: true},
			{name: 'New York', checked: true},
		]
	}

	handlerBox = (ev) => {
		const idx = ev.target.id;
		const node = ev.target.nextSibling
		node.classList.toggle('done-3');

		const arr = this.state.cities.slice();
		arr[idx].checked = !arr[idx].checked;

		this.setState(arr);

	}
	
	render(){
		const list = this.state.cities.map((item, index)=>{
			return(
					<div key={index} className="form-check notes">
						<input 
							type="checkbox" id={index}
							className="form-check-input"
							checked={item.checked}
							onChange={this.handlerBox}/>
						<label
							className="form-check-label">
							{item.name}-
						</label>
						<label 
							className="form-check-label">
							{item.name}
						</label>
					</div>
				
			);
		});
		return(
			<form>
				{list}
			</form>
		);
	}
}

export default Tasks;