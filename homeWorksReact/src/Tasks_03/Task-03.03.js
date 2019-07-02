import React from 'react';
/*
	3-3.Сделайте кнопочку, по нажатию на которую сработает метод showName и на экран алертом выведется имя пользователя из стейта.
*/
const state = {name: 'Иван', age: 25};
const showName = () => {
	alert(`hello, ${state.name}`);
}

const Tasks = () =>{

  	return <button onClick={showName}>ClickMe!</button>;

}

export default Tasks;