import { createStore } from 'redux';
import Reducer from './reducers'

// const initialState = { checked: false };
// const store = createStore(Reducer, initialState);

const store = createStore(Reducer);
export default store;