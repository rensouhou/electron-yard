/**
 * @overview
 *
 * @since 0.2.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/reducers/core-app
 */
import createReducer from './create-reducer';
import {
  REGISTER_GAME_VIEW,
  UPDATE_CONFIGURATION,
  TAKE_SCREENSHOT
} from '../actions/app-core';

const initialState = {};

// export default function appCoreReducer(state = {}, action) {
//   switch (action.type) {
//     case REGISTER_GAME_VIEW:
//       return { ...state, gameview: action.payload };
//     case UPDATE_CONFIGURATION:
//       return { ...state, config: action.payload };
//     default:
//       return state;
//   }
// }

export default createReducer(initialState, {
  [REGISTER_GAME_VIEW](state, action) {
    return { ...state, gameView: action.payload };
  },
  [UPDATE_CONFIGURATION](state, action) {
    return { ...state };
  },
  [TAKE_SCREENSHOT](state, action) {
    return { ...state, successful: true, filename: action.payload.filename };
  }
});

