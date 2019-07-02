import React, { Component } from "react";
/*
	8-05. Дан массив. Выведите элементы этого массив в виде списка ul. Сделайте так, чтобы по нажатию на li внутри нее появился инпут, с помощью которого можно будет поредактировать текст этой li. По потери фокуса текст из инпута должен записаться обратно в li, а инпут исчезнуть.

*/

class Tasks extends Component {
  state = {
    users: [
      { text: "Коля, surname: Иванов, age: 30" },
      { text: "Вася, surname: Петров, age: 40" },
      { text: "Петя, surname: Сидоров, age: 50" }
    ]
  }

  handlerClick = ev => {
    const node = ev.target.nextSibling.nextSibling;
    node.classList.toggle("done-3");
  }

  handlerHide = ev => {
    ev.target.classList.toggle("done-3");
  }

  handlerInput = ev => {
    // получаем индекс элемента li
    const attr = Number(ev.target.parentNode.getAttribute("id"));

    //console.log(this.state.users[attr].text);

    //1-ый вариант обновления состояния
    // fron here http://qaru.site/questions/1001134/reactjs-setstate-of-object-key-in-array

    // var stateCopy = Object.assign({}, this.state);
    // stateCopy.users[attr].text = ev.target.value;
    // this.setState(stateCopy);

    //2-ой вариант обновления состояния
    // fron here http://qaru.site/questions/1001134/reactjs-setstate-of-object-key-in-array
    //this.state.users[attr].text = ev.target.value;
    //this.setState({ users: this.state.users });

    //3-ий вариант обновления состояния
    // from here http://qaru.site/questions/1001134/reactjs-setstate-of-object-key-in-array
    const newArray = this.state.users.slice(); // копируем стейт
    newArray[attr].text = ev.target.value; // изменяем свойство
    this.setState(newArray); // возвращаем стейт
  };

  render() {
    const list = this.state.users.map((item, index) => {
      return (
        <li id={index} className="list-group-item" key={index}>
          <span onClick={this.handlerClick}>{item.text}</span>
          <br />
          <input
            value={this.state.users[index].text}
            type="text"
            className="done-3"
            onMouseOut={this.handlerHide}
            onChange={this.handlerInput}
          />
        </li>
      );
    });
    return <ul className="list-group">{list}</ul>;
  }
}

export default Tasks;
