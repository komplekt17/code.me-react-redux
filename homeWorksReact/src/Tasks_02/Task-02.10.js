
/*
	2-11.Пусть класс App имеет метод getNum1(), который своим результатом возвращает число 1 и метод getNum2(), который своим результатом возвращает число 2. Используя эти методы в методе render выведите на экран сумму результатов этих методов (3 - результат сложения getNum1() и getNum2()):
	<div>
		текст 3
</	</div>
*/

const Tasks = () =>{
	const getText1 = () => {
		return 1;
	}
	const getText2 = () => {
		return 2;
	}

	const summ = getText1() + getText2();

  	return 'text ' + summ ;
}

export default Tasks;