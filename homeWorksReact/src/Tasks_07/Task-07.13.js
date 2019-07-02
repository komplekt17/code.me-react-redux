import React, {Component} from 'react';
/*
	7-13. Даны 3 селекта. В первом можно выбрать день, во втором месяц, а в третьем год. Дан абзац. Сделайте так, чтобы в этот абзац вывелся день недели за выбранную дату. Пусть по умолчанию в селекте отображается текущая дата.
*/

class Tasks extends Component {

	state = {
		date: [],
		month: [],
		year: [],
		startDate: '',
		currentY: 0,
		currentM: 0,
		currentD: 0
	}
// func creating arrays
	getArray = (a, b) =>{
		var arr = [];
		for(var i=a; i <= b; i++){
			arr.push(i);
		}
		return arr;
	}

	getCurrentDate = (y, m, d) => {
		var z, options, q;
		if(y !== 0){ // получаем длинную дату
			z = new Date(y, m, d);
			options = {
			  year: 'numeric',
			  month: 'long',
			  day: 'numeric',
			  weekday: 'long'
			};
			q = z.toLocaleString("ru", options)
			this.setState({startDate: q})
			return q;
		}else{ //получаем только название месяца
			z = new Date(y, m, d);
			options = {
			  month: 'long'
			};
			return z.toLocaleString("ru", options);
		}
	}

	handlerSelect = (ev) => {
		var number = parseInt(ev.target.value);
		if(ev.target.id === '1') this.setState({currentD: number});
		if(ev.target.id === '2') this.setState({currentM: number});
		if(ev.target.id === '3') this.setState({currentY: number});
	}

	setDate = () => {
		let mth = this.state.month[this.state.currentM];
		if(mth === 0) mth = 12;
		this.setState({
			startDate: this.getCurrentDate(
				this.state.year[this.state.currentY], 
				this.state.month[mth-1], 
				this.state.date[this.state.currentD])
		})
		//console.log(this.state.currentM);
	}
	
	render(){
		if(this.state.date.length === 0) {
			var nd = new Date();
			let y = nd.getFullYear();
			let m = nd.getMonth();
			let d = nd.getDate();
			console.log(y,m,d)
			this.setState({
				date: this.getArray(1, 31),
				month: this.getArray(0, 11),
				year: this.getArray(1901, y),
				startDate: this.getCurrentDate(y, m, d)
			});
		}
		else{
			var dates = this.state.date.map((item, index)=>{
				return <option key={index} value={index}>{item}</option>
			});
			var months = this.state.month.map((item, index)=>{
				return <option key={index} value={index}>{this.getCurrentDate(0, item, 0)}</option>
			});
			var years = this.state.year.map((item, index)=>{
				return <option key={index} value={index}>{item}</option>
			});
		}
		return(
			<div>
				<select name="Day" id="1"
					value={this.state.currentD}
					selected={this.state.currentD}
					onChange={this.handlerSelect}
					onMouseOut={this.setDate}>
					{dates}
				</select>
				<select name="Month" id="2"
					value={this.state.currentM}
					selected={this.state.currentM}
					onChange={this.handlerSelect}
					onMouseOut={this.setDate}>
					{months}
				</select>
				<select name="Year" id="3"
					value={this.state.currentY}
					selected={this.state.currentY}
					onChange={this.handlerSelect}
					onMouseOut={this.setDate}>
					{years}
				</select>
				<p>{this.state.startDate}</p>
			</div>
		);
	}

	
}

export default Tasks;