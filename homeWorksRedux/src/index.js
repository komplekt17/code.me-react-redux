import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './Tasks_11/Task-11.07/App';
import store from "./Tasks_11/Task-11.07/redux-store";

ReactDOM.render(
    <Provider store={store}>
		<App />
	</Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();