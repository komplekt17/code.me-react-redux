import React, {Component} from 'react';
/*
	7-7. Дан текстареа и кнопка. Дан также стейт texts с массивом текстов. Изначально этот массив пустой, но каждый раз по нажатию на кнопку в конец этого массива должно записаться текущее содержимое текстареа. Выведите содержимое массива this.state.texts так, чтобы каждый элемент массива выводился в новом абзаце.
*/

class Tasks extends Component {

	state = {
		textsArr: [],
		valueText: ''
	}

	handlerText = (event) => {
		this.setState({valueText: event.target.value});
	}

	addText = () => {
		if(this.state.valueText === '') alert('You must enter any text');
		else {
			const arr = this.state.textsArr;
			arr.push(this.state.valueText);
			this.setState({arr, valueText: ''});
		}
	}
	
	render(){
		const text = this.state.textsArr.map((item, index)=>{
			return(
				<p key={index}>{index+1}. {item}</p>
			);
		});
		return(
			<div>
				<label htmlFor="">Enter here your text:</label><br/>
				<textarea 
					name="" id="" cols="30" rows="10"
					value={this.state.valueText}
					onChange={this.handlerText}/><br/>
				<button onClick={this.addText}>Save text</button>
				{text}
			</div>
		);
	}
	
}

export default Tasks;