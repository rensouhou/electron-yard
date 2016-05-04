/**
 * @overview
 *
 * @since 0.2.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/store/configure-store-production
 */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { hashHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import rethinkMiddleware from '../core/rethinkdb-middleware';

const router = routerMiddleware(hashHistory);

const rdbMiddleware = rethinkMiddleware();

const enhancer = applyMiddleware(thunk, router, rdbMiddleware);

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
}
