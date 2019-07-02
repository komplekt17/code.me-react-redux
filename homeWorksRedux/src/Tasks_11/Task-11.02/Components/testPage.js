import React from 'react';
/*
	11-02. Реализуйте тест. Дан массив с вопросами и правильными ответами. Выведите все эти вопросы на экран, а под каждым вопросом - инпут. В этот инпут пользователь должен ввести правильный ответ на вопрос. Под всеми вопросами должна находиться кнопка 'сдать тест'. По нажатию на эту кнопку под вопросами вместо инпутов должно появится следующее: 'ваш ответ такой-то, правильно' или 'ваш ответ такой-то, не правильно, правильный ответ такой-то'. Правильные ответы должны быть зеленого цвета, а неправильные - красного.
*/

const TestPage = (props) => {

    const { test, handlerValue, handleClick } = props;

    const page = test.map((item, idx) => {
        return (
            <div key={idx} className="notes" id={idx}>
			  <h4>{item.question}</h4>
			  <ol>
			    {item.answers.map((answerItem, index) => {
			      	return <li key={index}>{answerItem}</li>
			    })}
			  </ol>
			  <div className="input-group">
			    <input
			      	onChange={(ev)=>{
				      	handlerValue(idx, ev.target.value)}}
			      	placeholder="Enter answer number"
			      	type="number"/>
			    <div className="input-group-append">
			      <button
			      	className="btn btn-outline-warning" 
			      	onClick={(ev)=>{
			      		let lgth = item.answers.length;
			      		if(Number(item.check) <= 0 || 
			      			Number(item.check) > lgth){
			      			alert("Enter correct number from 1 to "+ lgth);
			      		}else {
			      			handleClick(idx, item.check);
							const elem = ev.target.parentNode.parentNode;
						    elem.classList.add("done-3");
			      		}
			      		}}>
			        Save
			      </button>
			    </div>
			  </div>
			</div>
        );
    });

    return page;

}

export default TestPage;