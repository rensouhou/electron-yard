/**
 * @overview
 *
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/reducers/game
 */
import { ApiEvents } from '../actions/game';

export default function gameReducer(state = {}, action) {
  switch (action.type) {
    case ApiEvents.INITIALIZE_GAME:
      console.log(`ApiEvents.${action.type}`, { state, action });
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}
