import React from 'react';
/*
	2-7. Дан див с текстом. Установите этому диву зеленый цвет, границу и border-radius в 30px.
*/

const Tasks = () =>{
	const css = {
		color: 'green',
		border: '1px solid red',
		borderRadius: '10px',
		padding: '10px 20px'
	};
  	const text = <p style={css}>text</p>;

  	return text
}

export default Tasks;