import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import movie from "./reducers/movie"
import myAccount from "./reducers/myAccount"
import thunk from "redux-thunk"

const reducer = combineReducers({
    movie,
    myAccount
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk)),
);

export default store;