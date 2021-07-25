import { createStore } from "redux";
import allReducers from "Redux/Reducers";

let store = createStore(allReducers)

export default store;