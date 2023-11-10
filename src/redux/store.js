// import { configureStore } from "@reduxjs/toolkit";
import { createStore , applyMiddleware, compose} from "@reduxjs/toolkit";
import reducer from "./reducers/index";
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
    )