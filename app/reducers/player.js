/**
 * @overview
 *
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/reducers/player
 */

import { RECEIVED_API_DATA } from '../actions/game';

export default function playerReducer(state = {}, action) {
  switch (action.type) {
    case RECEIVED_API_DATA && action.payload:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}
