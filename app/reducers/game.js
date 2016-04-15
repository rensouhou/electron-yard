/**
 * @overview
 *
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/reducers/game
 */
import { ApiEvents } from '../actions/game';
import createReducer from './create-reducer';

export default createReducer({}, {
  [ApiEvents.INITIALIZE_GAME](state, action) {
    return { ...state, ...action.payload };
  }
});
