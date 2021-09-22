import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';
import {personagesReducer} from "./personages";

const rootReducer = combineReducers({
  personagesReducer:personagesReducer
});
export const store=createStore(rootReducer, applyMiddleware(thunk))