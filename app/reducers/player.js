/// <reference path="../../lib/typedefs/kancolle.d.ts" />
/// <reference path="../../lib/typedefs/dockyard.d.ts" />
/**
 * @overview
 *
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/reducers/player
 */
import R from 'ramda';
import { ApiEvents } from '../actions/game';
import createReducer from './create-reducer';

const initialState = {
  profile: {
    limits: {}
  },
  quests: {},
  fleets: [],
  ships: [],
  slotItems: [],
  missions: [],
  docks: {
    repairDocks: [],
    constructionDocks: []
  },
  materials: {}
};

const mergeProfile = (k, l, r) => {
  switch (k) {
    case 'profile':
    case 'materials':
      return R.merge(l, r);
    case 'ships':
    case 'fleets':
    case 'slotItems':
      return r;
    default:
      return r;
  }
};

const updateBaseData = (data, state) => R.mergeWithKey(mergeProfile, state, data);
const updateKey = (key, data, state) => R.assoc(key, { ...data }, state);
// const updateFleet = (fleet, state) => R.assoc('fleets', { ...fleet }, state);
// const updateMaterials = (materials, state) => R.assoc('materials', { ...materials }, state);
// const updateShips = (ships, state) => R.assoc('ships', { ...ships }, state);
// const updateSlotItems = (slotItems, state) => R.assoc('slotItems', { ...slotItems }, state);

export default createReducer(initialState, {
  [ApiEvents.GET_PLAYER_BASE_DATA](state, action) {
    console.log('get player base data', state, action);
    return updateKey('slotItems', action.payload.slotItems.items, state);
  },
  [ApiEvents.GET_BASE_DATA](state, action) {
    return updateBaseData(action.payload, state);
  },
  [ApiEvents.GET_FLEET](state, action) {
    return updateKey('ships', action.payload.ships, state);
  },
  [ApiEvents.LOAD_FLEET_PRESET](state, action) {
    return updateKey('fleets', { [action.payload.fleetId]: action.payload.fleet }, state);
  },
  [ApiEvents.GET_MATERIAL](state, action) {
    return updateKey('materials', action.payload, state);
  },
  [ApiEvents.GET_CONSTRUCTION_DOCKS](state, action) {
    return { ...state };
  }
});
