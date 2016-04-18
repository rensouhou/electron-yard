/// <reference path="../../../lib/typedefs/kancolle.d.ts" />
/// <reference path="../../../lib/typedefs/dockyard.d.ts" />
/**
 * @overview
 *
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/reducers/player
 */
import deepAssign from 'deep-assign';
import { ApiEvents } from '../actions/game';
import createReducer from './create-reducer';
import { deepMerge } from '../transformers/utils';

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
    const { player } = action.payload;
    return deepMerge(state, player);
  },
  [ApiEvents.GET_FLEET](state, action) {
    const { ships } = action.payload;
    return deepMerge(state, { ships });
  },
  [ApiEvents.LOAD_FLEET_PRESET](state, action) {
    const { fleetId, fleet } = action.payload;
    return deepMerge(state, { fleets: { [fleetId]: fleet } });
  },
  [ApiEvents.GET_MATERIAL](state, action) {
    return deepMerge(state, { materials: action.payload });
  }
});
