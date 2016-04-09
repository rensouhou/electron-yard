/**
 * @overview
 *
 * @since 0.2.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/reducers
 */
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import coreApp from './app-core';
import electron from './electron';

const rootReducer = combineReducers({
  electron,
  coreApp,
  routing
});

export default rootReducer;
