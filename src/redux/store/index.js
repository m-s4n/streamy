import {createStore, compose, applyMiddleware} from 'redux';
import rootReducers from '../reducers/rootReducer';
import reduxLogger from 'redux-logger';
import reduxPromiseMiddleware from 'redux-promise-middleware';

const allEnhancers = compose(applyMiddleware(reduxLogger,reduxPromiseMiddleware));

export const store = createStore(rootReducers,allEnhancers);
