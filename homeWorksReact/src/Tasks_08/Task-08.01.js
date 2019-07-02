import React, {Component} from 'react';
/*
	8-01. Дан массив. Выведите элементы этого массива в виде списка ul. Сделайте так, чтобы внутри каждой li был чекбокс, по нажатию на который содержимое чекбокса будет перечеркиваться.
*/

class Tasks extends Component {

	state = {
		cities: [
			'Moscow',
			'London',
			'Paris',
			'Berlin',
			'New York'
		]
	}

	handlerBox = (ev) => {
		ev.target.nextSibling.classList.toggle('done');
		//console.log(ev.target.parentNode);
	}
	
	render(){
		const list = this.state.cities.map((item, index)=>{
			return (
				<li key={index} className="list-item">
					<input 
						className="form-check-input" 
						onChange={this.handlerBox}
						type="checkbox"/> 
					<label className="form-check-label">
						{item}
					</label>
				</li>
			);
		})
		return(
			<ul className="list-unstyled">{list}</ul>
		);
	}
}

export default Tasks;