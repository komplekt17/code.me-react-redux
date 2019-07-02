import React from 'react';
/*
2-8.Пусть в методе render есть переменная show, которая может иметь значение true или false. Сделайте так, чтобы, если эта переменная равна true, метод render вывел на экран следующее:
<div>
	текст 1
</div>
*/

const Tasks = () =>{
	const show = true;
  	let text;
  	if(!show) text = <p>text1</p>;
  	else text = <p>text2</p>;

  	return text
}

export default Tasks;