import React, { Component } from "react";
/*
	8-12. Дан массив с работниками. У каждого работника есть имя, фамилия, зарплата, пол. Выведите этих работников на экран в виде таблицы. Под таблицей сделайте форму, с помощью которой в таблицу можно будет добавить нового работника. В этой форме имя, фамилия, зарплата будут инпутами, а пол - селектом, в котором можно будет выбрать один из двух вариантов.

*/

class Tasks extends Component {

	state = {
		workers: [
			{name: 'Bob', surname: 'Meljanski', salary: 5140, sex: 'male'},
			{name: 'Michel', surname: 'Hensson', salary: 5420, sex: 'male'},
			{name: 'Jane', surname: 'Mitchel', salary: 2054, sex: 'female'},
			{name: 'Rebeka', surname: 'Wotson', salary: 4470, sex: 'female'},
			{name: 'Max', surname: 'Payton', salary: 3920, sex: 'male'}
		],
		fields: {
			inputName: '', 
			inputSurname: '', 
			inputSalary: '',
			option: ''}
	}

	handlerSelect = (ev) => {
		const obj = this.state.fields;
		const elem = ev.target.getAttribute('name')
		if(elem === 'name'){
			obj.inputName = ev.target.value;
			this.setState({obj})
		}
		if(elem === 'surname'){
			obj.inputSurname = ev.target.value;
			this.setState({obj})
		}
		if(elem === 'salary'){
			obj.inputSalary = ev.target.value;
			this.setState({obj})
		}
		if(elem === 'option'){
			obj.option = ev.target.value;
			this.setState({obj})
		}
	}

	addWorker = () => {
		if(this.state.fields.inputName !== '' &&
			this.state.fields.inputSname !== '' &&
			this.state.fields.inputSalary !== '' &&
			(this.state.fields.option !== '' && 
				this.state.fields.option !== 'sex'))
			{
				
				const newWorker = {name: '', surname: '', salary: 0, sex: ''};
				newWorker.name = this.state.fields.inputName;
				newWorker.surname = this.state.fields.inputSurname;
				newWorker.salary = this.state.fields.inputSalary;
				newWorker.sex = this.state.fields.option;

				const kk = this.state.workers.slice();
				kk.push(newWorker);

				// сбрасываем значения полей
				const newFields = {};
				newFields.inputName = '';
				newFields.inputSurname = '';
				newFields.inputSalary = '';
				newFields.option = '';

				this.setState({workers: kk, fields: newFields});


			}
		else alert('You must correctly complete all fields')
	}



	render(){
		const tableList = this.state.workers.map((item, index)=>{
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
				<div className="row">
					<form className="col-md-6 notes">
						<div className="form-group">
    						<label>Name</label>
    						<input
    							name="name"
    							value={this.state.fields.inputName}
								onChange={this.handlerSelect}
    							type="text" 
    							className="form-control"/>
  						</div>
						<div className="form-group">
    						<label>Surname</label>
    						<input 
    							name="surname"
    							value={this.state.fields.inputSurname}
								onChange={this.handlerSelect} 
    							type="text" 
    							className="form-control"/>
  						</div>
						<div className="form-group">
    						<label>Salary</label>
    						<input 
    							name="salary" 
    							value={this.state.fields.inputSalary} 
								onChange={this.handlerSelect}
    							type="number" 
    							className="form-control"/>
  						</div>
  						<div className="input-group">
							<select name="option"
								className="custom-select"
								value={this.state.fields.option}
								onChange={this.handlerSelect}>
								<option value="sex">Your sex</option>
								<option value="male">male</option>
								<option value="famale">female</option>
							</select>
	  						<div className="input-group-append">
								<button 
									onClick={this.addWorker}
									type="button" 
									className="btn btn-info">
									Add worker
								</button>
							</div>
						</div>
					</form>
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
