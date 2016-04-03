/**
 * @overview
 *
 * @since 0.2.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/reducers
 */
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

const rootReducer = combineReducers({
  routing
});

export default rootReducer;