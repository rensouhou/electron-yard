/**
 * @overview
 *
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/reducers/player
 */
import { ApiEvents } from '../actions/game';

const initialState = {
  profile: {},
  quests: [],
  fleets: [],
  missions: [],
  docks: {
    repairDocks: [],
    constructionDocks: []
  },
  inventory: {
    ships: [],
    slotItems: [],
    materials: {}
  }
};

export default function playerReducer(state = initialState, action) {
  switch (action.type) {
    case ApiEvents.GET_BASE_DATA:
      return Object.assign({}, state, action.payload.player);
    default:
      return state;
  }
}
