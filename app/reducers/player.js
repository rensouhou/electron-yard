/**
 * @overview
 *
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/reducers/player
 */
import { ApiEvents } from '../actions/game';
import createReducer from './create-reducer';

const initialState = {
  profile: {},
  quests: {},
  fleets: {},
  missions: {},
  docks: {
    repairDocks: {},
    constructionDocks: {}
  },
  ships: {},
  slotItems: {},
  materials: {}
};

export default createReducer(initialState, {
  [ApiEvents.GET_BASE_DATA](state, action) {
    return {
      ...state,
      ...action.payload.player
    };
  },
  [ApiEvents.GET_FLEET](state, action) {
    return {
      ...state,
      ...{
        ships: {
          ...state.ships,
          ...action.payload.ships
        }
      }
    };
  },
  [ApiEvents.GET_MATERIAL](state, action) {
    return {
      ...state,
      ...action.payload
    };
  }
});
