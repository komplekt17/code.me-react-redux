/*
	3-1.Дан следующий стейт:
	this.state = {name: 'Иван', age: 25};
	Сделайте так, чтобы метод render вывел на экран следующее ('Иван' и 25 должны взяться из стейта):
	<div>
		имя: Иван, возраст: 25
	</div>
*/
const state = {name: 'Иван', age: 25}

const Tasks = () =>{
	

  	return `имя: ${state.name}, возраст: ${state.age}`;
}

export default Tasks;