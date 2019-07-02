import { createStore } from "redux";
import Reducer from "./reducers";

const initialState = { text: 'qwerty' };
const store = createStore(Reducer, initialState);

export default store;