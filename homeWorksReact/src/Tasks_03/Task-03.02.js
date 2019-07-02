import React from 'react';
/*
	3-2.Сделайте кнопочку, по нажатию на которую сработает метод showMessage и на экран алертом выведется сообщение с текстом 'hello'.
*/
const state = {name: 'Иван', age: 25};
const showMessage = () => {
	alert(`hello, ${state.name}`);
}

const Tasks = () =>{

  	return <button onClick={showMessage}>ClickMe!</button>;

}

export default Tasks;