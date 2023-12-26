import { applyMiddleware, combineReducers,createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers/rootReducer"

export const store = configureStore({
    reducer: rootReducer
});