/**
 * @overview
 *
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/reducers/player
 */
import { ApiEvents } from '../actions/game';

export default function playerReducer(state = {}, action) {
  switch (action.type) {
    case ApiEvents.GET_BASE_DATA:
      return Object.assign({}, state, action.payload.player);
    default:
      return state;
  }
}
