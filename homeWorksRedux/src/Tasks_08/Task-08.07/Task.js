import React from 'react';
/*
	8-07. Дан массив с туристическими маршрутами. Выведите эти маршруты на экран так, чтобы рядом с каждым стояла радио-кнопочка. Пользователь может выбрать один из маршрутов. Его выбор должен отобразиться на экране в абзаце.
*/

const Task = ({storeFromApp, addSelectValue}) => {

	const {routes, option} = storeFromApp;

	const style = {fontWeight: 'bold', color: 'tomato'};

	let tableRoute = routes.map((item, index) => {
		return(
			<tr key={index}>
				<td><img src={item.img} alt=""/></td>
				<td>{item.name}</td>
				<td>{item.discription}</td>
				<td>
					<input
						name="route"
						type="radio"
						checked={Number(option) === index}
						onChange={()=>addSelectValue(index)}/>
				</td>
			</tr>
		);
	});

	return(
		<div className="col-md-6">
			<p>Selected route: {routes[option].name}</p>
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
			<p>Selected route: {routes[option].name}</p>
		</div>
	);
}

export default Task;