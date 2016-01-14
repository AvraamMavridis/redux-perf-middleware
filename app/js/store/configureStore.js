import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import * as reducers from '../reducers/index';
import perflogger from 'redux-perf-middleware';

let createStoreWithMiddleware = applyMiddleware( perflogger )( createStore );

const rootReducer = combineReducers( reducers );

export default function configureStore( initialState = {} ) {
  return createStoreWithMiddleware( rootReducer, initialState );
}
