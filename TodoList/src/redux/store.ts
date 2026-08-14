import { createStore } from 'redux';
import todoReducer from "./reducers";

const store = createStore(todoReducer);
export default store;
