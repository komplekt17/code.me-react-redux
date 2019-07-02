import React, { Component } from "react";
/*
	8-09. Дан массив с работниками. У каждого работника есть имя, фамилия, зарплата. Выведите этих работников на экран в виде таблицы. Сделайте так, чтобы работников можно было посортировать по любой колонке этой таблицы.

*/


class Tasks extends Component {

	state = {
		workers: [
			{name: 'Bob', surname: 'Meljanski', salary: 5140},
			{name: 'Michel', surname: 'Hensson', salary: 5420},
			{name: 'Jane', surname: 'Mitchel', salary: 2054},
			{name: 'Rebeka', surname: 'Wotson', salary: 4470},
			{name: 'Max', surname: 'Payton', salary: 3920}
		],
		typeSort: [
			'Choose sort',
			'sort by ascending name',
			'sort by descending name',
			'sort by ascending surname',
			'sort by descending surname',
			'sort by ascending salary',
			'sort by descending salary'
		],
		option: '0'
	}

	handlerSelect = (ev) => {
		//console.log(ev.target.value)
		this.setState({
			option: ev.target.value
		})
		//console.log(this.state.option)
	}

	startSort = () => {
		//console.log(this.state.option)
		const arr = this.state.workers.slice();
		var kk;
		if(this.state.option === '0'){
			alert('You must select type sorting')
			kk = arr;
		}else if(this.state.option === '1'){
			kk = [...arr].sort((a,b) => (a.name<b.name)*2-1);
		}else if(this.state.option === '2'){
			kk = [...arr].sort((a,b) => (a.name>b.name)*2-1);
		}else if(this.state.option === '3'){
			kk = [...arr].sort((a,b) => (a.surname<b.surname)*2-1);
		}else if(this.state.option === '4'){
			kk = [...arr].sort((a,b) => (a.surname>b.surname)*2-1);
		}else if(this.state.option === '5'){
			kk = [...arr].sort((a,b) => (a.salary<b.salary)*2-1);
		}else if(this.state.option === '6'){
			kk = [...arr].sort((a,b) => (a.salary>b.salary)*2-1);
		}
		this.setState({ workers: kk });
	}

	
	render(){
		const tableList = this.state.workers.map((item, index)=>{
			return <tr key={index}>
						<td>{item.name}</td>
						<td>{item.surname}</td>
						<td>{item.salary}</td>
					</tr>
		});
		const options = this.state.typeSort.map((item, index)=>{
				return <option key={index} value={index}>{item}</option>
			});
		return(
			<div>
				<table className="table">
					<thead>
						<tr>
							<td>Name</td>
							<td>Surname</td>
							<td>Salary</td>
						</tr>
					</thead>
					<tbody>
						{tableList}
					</tbody>
				</table>
				<div className="input-group">
					<select
						className=""
						value={this.state.option}
						onChange={this.handlerSelect}>
						{options}
					</select>
				  	<div className="input-group-append">
					    <button 
							type="button"
							className="btn btn-info btn-sm"
							onClick={this.startSort}>
							Sort
						</button>
				  	</div>
				</div>
			</div>
		);
	}
}

export default Tasks;
