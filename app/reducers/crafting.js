/**
 * @overview
 *
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/reducers/crafting
 */
import createReducer from './create-reducer';
import { ApiEvents } from '../actions/game';

const initialState = {};

export default createReducer(initialState, {
  [ApiEvents.CRAFT_SHIP](state, action) {
    return { ...state };
  }
});
