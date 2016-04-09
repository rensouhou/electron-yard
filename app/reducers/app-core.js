/**
 * @overview
 *
 * @since 0.2.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/reducers/core-app
 */
import {
  REGISTER_GAME_VIEW,
  UPDATE_CONFIGURATION
} from '../actions/app-core';

export default function appCoreReducer(state = {}, action) {
  switch (action.type) {
    case REGISTER_GAME_VIEW:
      return { ...state, gameview: action.payload };
    case UPDATE_CONFIGURATION:
      return { ...state, config: action.payload };
    default:
      return state;
  }
}
