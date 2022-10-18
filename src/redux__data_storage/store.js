import { createStore } from "redux";
import combine_reducers from "./reducers/combine_reducers";

const store = createStore( combine_reducers );

export default store;