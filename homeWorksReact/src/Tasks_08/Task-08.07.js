import React, { Component } from "react";
/*
	8-07. Дан массив с туристическими маршрутами. Выведите эти маршруты на экран так, чтобы рядом с каждым стояла радио-кнопочка. Пользователь может выбрать один из маршрутов. Его выбор должен отобразиться на экране в абзаце.

*/

class Tasks extends Component {

	state = {
		routes: [
			{
				name: 'Таракташская тропа - маршрут на Ай-Петри',
				img: 'http://krymea.ru/upload/000/u1/002/5fd18557.jpg',
				discription: 'Живописная тропа на плато Ай-Петри из Ялты мимо водопада Учан-Су.' 
			},
			{
				name: 'Маршрут на Ильяс-Кая и храм Солнца ', 
				img: 'http://krymea.ru/upload/000/u1/4d/3c/38184ad8.jpg', 
				discription: 'Маршрут к храму Солнца и на Ильяс-Кая и обратно - для начинающих туристов и опытных походников.'
			},
			{
				name: 'Тропа Голицына в Новом Свете', 
				img: 'http://krymea.ru/upload/000/u1/100/cdc7c5cf.jpg', 
				discription: 'Описание жемчужины Нового Света - тропы Голицына, идущей вдоль берега под скалами.'
			},
			{
				name: 'Байдарская стена - от Оливы до Фороса', 
				img: 'http://krymea.ru/upload/000/u1/074/d882c326.jpg', 
				discription: 'Нитка маршрута Олива - перевал Шайтан-Мердвен - Байдарская стена - Форосская церковь.',
			}
		],
		option: 0
	}
	handleRadioChange = (ev) => {
		this.setState({option: ev.target.value});
	}

	render(){
		let num = this.state.option;
  		const style = {fontWeight: 'bold', color: 'tomato'}
		const tableRoute = this.state.routes.map((item, index) => {
			return(
					<tr key={index}>
						<td><img src={item.img} alt=""/></td>
						<td>{item.name}</td>
						<td>{item.discription}</td>
						<td>
							<input
								name="route"
								type="radio"
								value={index}
								checked={Number(this.state.option) === index}
								onChange={this.handleRadioChange}
								/>
						</td>
					</tr>
			);
		});
		return(
			<div className="container">
				<table>
					<thead>
						<tr style={style}>
							<td>Preview</td>
							<td>Route</td>
							<td>Discription</td>
							<td>Check</td>
						</tr>
					</thead>
					<tbody>
						{tableRoute}
					</tbody>
				</table>
				<p>Selected route: {this.state.routes[num].name}</p>
			</div>
		);
	}
}

export default Tasks;
