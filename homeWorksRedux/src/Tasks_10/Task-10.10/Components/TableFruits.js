import React from 'react';
/*
	10-07. Пусть в стейте хранится массив с продуктами. У каждого продукта есть название, цена и количество. Выведите все продукты на экран в виде таблицы. Сделайте так, чтобы в таблице была колонка, в которой выводится полная стоимость продукта (цена умножить на количество).

	Пусть отображением продукта на экран занимается отдельный компонент. Сделайте так, чтобы рядом с каждым продуктом была кнопка 'удалить', с помощью которой можно удалить этот продукт из таблицы.

	10-08. Модифицируйте предыдущую задачу так, чтобы появился еще и один отдельный компонент для добавления нового продукта в таблицу.

	10-09. Модифицируйте предыдущую задачу так, чтобы под таблицей появился еще и один отдельный компонент, в котором будет выведена полная стоимость всех продуктов.

	10-10. Модифицируйте предыдущую задачу так, чтобы в таблице появилась еще одна колонка, в которой будут находиться чекбоксы. Изначально эти чекбоксы отмечены. Сделайте так, чтобы полная стоимость всех продуктов выводилась только для тех продуктов, у которых чекбокс отмечен.
*/
const TableFruits = ({storeFromApp, handlerCheckbox, deleteFruit}) => {

	let summ = 0;
	let qwt = 0;

	const table = storeFromApp.fruits.map((item, index)=>{

		if(item.checked){
			summ += item.price*item.quantity;
			qwt += item.quantity;
		}
		
		return (
		    <tr key={index}>
		      	<td style={{textAlign: 'center'}}>
		      		<input id={index} 
		      			type="checkbox"
		      			className="form-check-input"
		      			checked={item.checked}
		      			onChange={()=>handlerCheckbox(index)}/>
		      	</td>
		      	<td>{item.name}</td>
		      	<td>${item.price}</td>
		      	<td>{item.quantity}</td>
		      	<td>${item.price*item.quantity}</td>
		      	<td>
		      		<button 
		      			className="btn btn-outline-warning btn-sm"
		      			onClick={()=>deleteFruit(index)}>
		      			Delete
	      			</button>
      			</td>
		    </tr>
		)
	});
	return (
		<div className="col-md-7">
			<table className="table">
				<thead>
					<tr>
						<th scope="col">Check</th>
						<th scope="col">Fruit</th>
						<th scope="col">Price</th>
						<th scope="col">Quantity</th>
						<th scope="col">Sum</th>
						<th scope="col">Delete</th>
					</tr>
				</thead>
				<tbody>
					{table}
				</tbody>
			</table>
			<div className="notes">
				<p>Selected Total: ${parseFloat(summ).toFixed(2)}</p>
				<p>Quantity: {qwt}</p>
			</div>
		</div>
	);
}

export default TableFruits;