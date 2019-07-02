import React, {Component} from 'react';
/*
	6-11.  Дан массив. Выведите этот массив в виде списка ul. Также даны инпут и кнопка. Сделайте так, чтобы в инпут можно было ввести число, нажать на кнопку - и из списка ul удалился элемент с введенным в инпут номером.

*/

class Tasks extends Component {
	
	state = {
		nums: [1,2,3,4,5,6,7,8,9],
		value: ''
	}

	textInp = (event) => {
		this.setState({value: event.target.value});
	}

	addItem = () => {
		const idx = this.state.value;
		const arr = this.state.nums;
		if(this.state.value === '' || idx > arr.length){
			this.setState({value: ''});
			alert('Enter correct number');
		}
		else{
			let arrTrue = false;
			for(var i=0; i<arr.length; i++){
				if(parseInt(arr[i]) === parseInt(idx)){
					//console.log(i);
					arrTrue = true;
					const newArr = arr.splice(i, 1);
					this.setState({newArr, value: ''});
				}
			}
			if(!arrTrue){
				this.setState({value: ''});
				alert("You inserted unexist number");
			}
		}
	}

	render(){
		const list = this.state.nums.map((item, index)=>{
			return <li key={index}>{item}</li>
		});
		return(
			<div>
				<ul>{list}</ul>
				<label htmlFor="">Enter number from list</label><br/>
				<input value={this.state.value} onChange={this.textInp} type="text"/>
				<button onClick={this.addItem}>Add item</button>
			</div>
		);
	}
	
}

export default Tasks;