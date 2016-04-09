/**
 * @overview
 *
 * @since 0.2.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/reducers/core-app
 */
import { REGISTER_GAME_VIEW, UPDATE_CONFIGURATION } from '../actions/app-core';

const initialState = {
  gameWebView: null
};

export default function appCoreReducer(state = initialState, action) {
  console.log(`appCoreReducer():call; action = ${action.type}`);
  switch (action.type) {
    case REGISTER_GAME_VIEW:
      console.log(REGISTER_GAME_VIEW);
      return { ...state, gameview: action.payload };
    case UPDATE_CONFIGURATION:
      return { ...state, config: action.payload };
    default:
      return state;
  }
}
