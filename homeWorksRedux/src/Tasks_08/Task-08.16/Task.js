import React from 'react';
/*
	8-16. Дан следующий массив с вопросами и вариантами ответов:

	this.state = {
		test: [
			{
				question: 'Вопрос 1',
				answers: [
					'Ответ1',
					'Ответ2',
					'Ответ3',
					'Ответ4',
					'Ответ5',
				],
				right: 3, //номер правильного ответа
			},
			{
				...
			},
			{
				...
			},
		]
	};
	Реализуйте текст с вопросами и вариантами ответов. Каждый вопрос должен быть в своем абзаце, а под ним - 5 радиокнопочек, с помощью которых можно выбрать один из ответов. Если ответ правильный - вопрос должен покраситься в зеленый цвет, а если неправильный - в красный.
*/

const Task = ({storeFromApp, addSelectValue}) => {

	const {test} = storeFromApp;

	// обработка классов
	const changeClass = (elem, check, right) => {

		// получаем коллекцию всех ответов по вопросу
		const elems = elem.parentNode.parentNode.childNodes;

		// сбрасываем классы подсветки для всех элементов коллекции
		for(var i=0; i<elems.length; i++){
			elems[i].classList.remove("rightly");
			elems[i].classList.remove("wrongly");
		}
		console.log(check, right)
		// добавляем классы подсветки для активного ответа
		if(check === right){
			elem.parentNode.classList.add("rightly");
		}else elem.parentNode.classList.add("wrongly");
	}
	
	const css = {textAlign: 'left'};
	const tests = test.map((item, idx)=>{
		return (
			<div key={idx} style={css} id={idx}>
				<h4>{item.question}</h4>
		{
			item.answers.map((answerItem, index)=>{
				return (
					<div key={index}
						className="custom-control custom-radio">
						<input 
							type="radio"
							id={idx+"."+index}
							value={index}
							checked={test[idx].check === index}
							onChange={(ev)=>{
								let right = test[idx].right;
								addSelectValue(ev.target.id);
								changeClass(ev.target, index, right)}}
							className="custom-control-input"/>
						<label htmlFor={idx+"."+index} 
							className="custom-control-label">
							{answerItem}
						</label>
					</div>	
				)
			})
		}
			</div>
		);
	});

	return(
		<div className="container">
			<div className="row">
				<div className="col-md-6">
					{/**/tests }
				</div>
			</div>
		</div>
	);
}

export default Task;