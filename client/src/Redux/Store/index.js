import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import loginReducer from '../Reducers/loginReducer';
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    user: loginReducer,
  }),
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
