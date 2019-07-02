import React from 'react';
/*
	8-13. Дан массив с работниками. У каждого работника есть имя, фамилия, зарплата. Выведите этих работников на экран в виде таблицы. Причем выведите только первых 10 работников, а над таблицей сделайте ссылки: 1, 2, 3, 4 и так далее. По нажатию на каждую ссылку в таблице будет отображаться заданный десяток работников. Ссылки над таблицей должны сгенерироваться автоматически исходя из количества работников.
*/

const Task = ({storeFromApp, addSelectValue}) => {

	const { workers, currentPage, workersPerPage } = storeFromApp;
		
	const handleClick = (event) => {
		// получаем массив элементов внутри <ul>
		const elems = event.target.parentNode.parentNode.childNodes;

		// добавляем class active к выбранному элементу
		for(var i=0; i<elems.length; i++){
			elems[i].classList.remove("active");
			if(i === (Number(event.target.id)-1)){
				elems[i].classList.add("active");
			}
		}
	}

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

    	let classNames = "page-item";
    	if(number === 1) classNames += " active";

      	return (
	        <li
	        	className={classNames}
	          	key={number}>
	          	<span 
	          		className="page-link"
		          	id={number}
		          	onClick={(ev)=>{
		          		addSelectValue(number);
		          		handleClick(ev)
		          	}}>
	          	{number}
	          	</span>
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

export default Task;