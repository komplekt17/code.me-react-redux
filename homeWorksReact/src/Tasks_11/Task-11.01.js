import React, {Component} from "react";
/*
	11-01. Дан массив с работниками. У каждого работника есть имя, фамилия, количество отработанных дней и зарплатная ставка за день. Выведите этих работников на экран в виде таблицы. Сделайте так, чтобы в последней колонке автоматически рассчитывалась зарплата работника (количество отработанных дней умножить на ставку). Сделайте так, чтобы количество дней и ставка выводились в виде инпутов. Если поредактировать эти инпуты - зарплата также должна поменяться. Под таблицей также выведите суммарную зарплату всех работников.
*/
class Task extends Component{

	state = {
		workers: [
	{name: 'Bob', surname: 'Meljanski', salary: 514.0, days: 20},
	{name: 'Michel', surname: 'Hensson', salary: 542.0, days: 19},
	{name: 'Jane', surname: 'Mitchel', salary: 205.4, days: 21},
	{name: 'Rebeka', surname: 'Wotson', salary: 447.0, days: 22},
	{name: 'Max', surname: 'Payton', salary: 392.0, days: 20},
	{name: 'Mary', surname: 'Siberg', salary: 458.0, days: 19},
	{name: 'Jakline', surname: 'Cliny', salary: 505.4, days: 18},
	{name: 'Rose', surname: 'Ritingale', salary: 477.0, days: 19},
	{name: 'Miki', surname: 'Dorryl', salary: 384.0, days: 22},
	{name: 'Roby', surname: 'Souzi', salary: 512.0, days: 21},
	{name: 'Jessica', surname: 'Vituse', salary: 295.4, days: 20},
	{name: 'Witney', surname: 'Routson', salary: 547.0, days: 21},
	{name: 'Mark', surname: 'Hayton', salary: 492.0, days: 18}
		]
	}

	handlerInput = (ev) => {
	    // получаем индекс элемента li
	    const attr = Number(ev.target.parentNode.parentNode.getAttribute("id"));
    	//console.log(attr);

    	const newArray = this.state.workers.slice(); // копируем стейт

    	if(ev.target.getAttribute("name") === 'salary'){
    		newArray[attr].salary = ev.target.value; // изменяем свойство
	    	this.setState(newArray); // возвращаем стейт
    	}

    	if(ev.target.getAttribute("name") === 'days'){
    		newArray[attr].days = ev.target.value; // изменяем свойство
	    	this.setState(newArray); // возвращаем стейт
    	}
	    
	}

	render(){
		let summ = 0;
		const table = this.state.workers.map((item, index)=>{
			summ += item.salary*item.days;
			return (
				<tr key={index} id={index}>
					<td>{item.name}</td>
					<td>{item.surname}</td>
					<td>
						<input
							value={item.salary}
							onChange={this.handlerInput}
							size='5'
							name="salary"
							type="number"/>
					</td>
					<td>
						<input 
							value={item.days}
							onChange={this.handlerInput}
							size='5'
							name="days"
							type="number"/>
					</td>
					<td>{parseFloat(item.salary*item.days).toFixed(2)}</td>
				</tr>
			);
		});
		return(
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<p>Total salary: {summ}</p>
						<table className="table table-striped">
							<thead>
								<tr>
									<th scope="col">Name</th>
									<th scope="col">Surname</th>
									<th scope="col">Koeff</th>
									<th scope="col">Work Days</th>
									<th scope="col">Salary</th>
								</tr>
							</thead>
							<tbody>
								{table}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		);
	}
}

export default Task;
