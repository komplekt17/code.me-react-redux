import React from 'react';
/*
	8-05. Дан массив. Выведите элементы этого массив в виде списка ul. Сделайте так, чтобы по нажатию на li внутри нее появился инпут, с помощью которого можно будет поредактировать текст этой li. По потери фокуса текст из инпута должен записаться обратно в li, а инпут исчезнуть.
*/

const Task = ({storeFromApp, addSelectValue}) => {
	const list = storeFromApp.users.map((item, index)=>{
		return(
			<li className="list-item" key={index}>
				<label forhtml="inputControl" 
					onClick={(ev)=>{
						ev.target.nextSibling.classList.toggle('done-3')}}>
					{item.name}
				</label>
				<input 
					id="inputControl"
					value={storeFromApp.users[index].name}
					onChange={(ev)=>addSelectValue(ev.target.value, index)}
        			onMouseOut={(ev)=>{
						ev.target.classList.toggle('done-3');
        			}}
					type="text"
					className="form-control form-control-sm done-3"/>
			</li>
		);
	});

	return(
		<div className="form">
			<ul className="list-unstyled">
				{list}
			</ul>
		</div>
	);
}

export default Task;