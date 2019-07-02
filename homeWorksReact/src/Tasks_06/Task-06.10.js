import React, {Component} from 'react';
/*
	6-10.  Дан следующий стейт:

this.state = {
	hrefs: [
		{href: '1.html', text: 'ссылка 1'},
		{href: '2.html', text: 'ссылка 2'},
		{href: '3.html', text: 'ссылка 3'},
	]
};
Выведите на экран следующее:

<ul>
	<li><a href="1.html">ссылка 1</a></li>
	<li><a href="2.html">ссылка 2</a></li>
	<li><a href="3.html">ссылка 3</a></li>
</ul>
Сделайте 2 инпута и кнопку, по нажатию на которую в список добавится новый li, причем href возьмется из первого инпута, а текст ссылки - из второго.
*/

class Tasks extends Component {
	
	state = {
		hrefs: [
			{href: '1.html', text: 'ссылка 1'},
			{href: '2.html', text: 'ссылка 2'},
			{href: '3.html', text: 'ссылка 3'},
		],
		textInp1: '',
		textInp2: ''
	}

	textInp1 = (event) => {
		this.setState({textInp1: event.target.value});
	}

	textInp2 = (event) => {
		this.setState({textInp2: event.target.value});
	}
	
	addItem = () =>{
		if (this.state.textInp1 === "" || this.state.textInp2 === "") {
      		alert("All inputs must be completed");
    } else {
      this.state.hrefs.push({
      	href: this.state.textInp1, 
      	text: this.state.textInp2});
      this.setState({ textInp1: "", textInp2: "" });
    }
	}

	render(){
		const list = this.state.hrefs.map((item, index)=>{
			return <li key={index}><a href={item.href}>{item.text}</a></li>
		});
		return(
			<div>
				<ul>{list}</ul>
				<input value={this.state.textInp1} onChange={this.textInp1} type="text"/><br/>
				<input value={this.state.textInp2} onChange={this.textInp2} type="text"/><br/>
				<button onClick={this.addItem}>Add item</button>
			</div>
		);
	}
	
}

export default Tasks;