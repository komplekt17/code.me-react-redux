import React, { Component } from "react";
/*
	8-13. Дан массив с работниками. У каждого работника есть имя, фамилия, зарплата. Выведите этих работников на экран в виде таблицы. Причем выведите только первых 10 работников, а над таблицей сделайте ссылки: 1, 2, 3, 4 и так далее. По нажатию на каждую ссылку в таблице будет отображаться заданный десяток работников. Ссылки над таблицей должны сгенерироваться автоматически исходя из количества работников.

*/

class Tasks extends Component {

	state = {
		workers: [
			{name: 'Bob', surname: 'Meljanski', salary: 5140, sex: 'male'},
			{name: 'Michel', surname: 'Hensson', salary: 5420, sex: 'male'},
			{name: 'Jane', surname: 'Mitchel', salary: 2054, sex: 'female'},
			{name: 'Rebeka', surname: 'Wotson', salary: 4470, sex: 'female'},
			{name: 'Max', surname: 'Payton', salary: 3920, sex: 'male'},
			{name: 'Mary', surname: 'Siberg', salary: 4580, sex: 'female'},
			{name: 'Jakline', surname: 'Cliny', salary: 5054, sex: 'female'},
			{name: 'Rose', surname: 'Ritingale', salary: 4770, sex: 'female'},
			{name: 'Miki', surname: 'Dorryl', salary: 3840, sex: 'male'},
			{name: 'Roby', surname: 'Souzi', salary: 5120, sex: 'male'},
			{name: 'Jessica', surname: 'Vitousse', salary: 2954, sex: 'female'},
			{name: 'Witney', surname: 'Routson', salary: 5470, sex: 'female'},
			{name: 'Mark', surname: 'Hayton', salary: 4920, sex: 'male'}
		],
      currentPage: 1, // страница показа
      workersPerPage: 3 // количество выдаваемых элементов в таблице
	}

	handleClick = (event) => {
		// получаем массив элементов внутри <ul>
		const elems = event.target.parentNode.parentNode.childNodes;
		// обновляем состояние текущей страницы показа
		this.setState({
		  currentPage: Number(event.target.id)
		});
		// добавляем class active к выбранному элементу
		for(var i=0; i<elems.length; i++){
			elems[i].classList.remove("active");
			if(i === (Number(event.target.id)-1)){
				elems[i].classList.add("active");
			}
		}
	}

	render(){
		// деструктурируем стейт
		const { workers, currentPage, workersPerPage } = this.state;

		// Logic for displaying workers
	    const indexOfLastWorker = currentPage * workersPerPage;
	    const indexOfFirstWorker = indexOfLastWorker - workersPerPage;
	    const currentTodos = workers.slice(indexOfFirstWorker, indexOfLastWorker);

	    // Logic for displaying page numbers
	    const pageNumbers = [];
	    for (let i = 1; i <= Math.ceil(workers.length / workersPerPage); i++) {
	      pageNumbers.push(i);
	    }

	    const renderPageNumbers = pageNumbers.map(number => {
	      	return (
		        <li
		        	className="page-item"
		          	key={number}>
		          	<span className="page-link"
		          	id={number}
		          	onClick={this.handleClick}>{number}</span>
		        </li>
	      	);
	    });

		const tableList = currentTodos.map((item, index)=>{
			return <tr key={index}>
						<td>{item.name}</td>
						<td>{item.surname}</td>
						<td>{item.salary}</td>
						<td>{item.sex}</td>
					</tr>
		});

  		const style = {fontWeight: 'bold', color: 'tomato'}
		return(
			<div className="container">
				<nav>
					<ul className="pagination">
					  {renderPageNumbers}
					</ul>
				</nav>
				<div className="row">
					<div className="col-md-6">
						<table className="table">
							<thead style={style}>
								<tr>
									<td>Name</td>
									<td>Surname</td>
									<td>Salary</td>
									<td>Sex</td>
								</tr>
							</thead>
							<tbody>
								{tableList}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		);
	}
}

export default Tasks;
