import {applyMiddleware, createStore, compose } from "redux";
import rootReducer from "./rootReducer"
import reduxImmutableStateInvariant from "redux-immutable-state-invariant"
import { getDefaultAppState } from "./types";

const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(rootReducer, getDefaultAppState(),
    composeEnhancers(applyMiddleware(reduxImmutableStateInvariant())));

export default store;