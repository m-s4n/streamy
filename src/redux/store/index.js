import {createStore, compose, applyMiddleware} from 'redux';
import rootReducers from '../reducers/rootReducer';
import reduxLogger from 'redux-logger';
import reduxPromiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';

const allEnhancers = compose(
    applyMiddleware(thunk, reduxLogger,reduxPromiseMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export const store = createStore(rootReducers,allEnhancers);
