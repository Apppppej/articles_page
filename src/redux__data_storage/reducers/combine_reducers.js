import { combineReducers } from "redux";
import redux__site_data from "./reducer__site_data.js";
import redux__article_data from "./reducer__articles_data.js";

export default combineReducers({
    redux__site_data,
    redux__article_data
});