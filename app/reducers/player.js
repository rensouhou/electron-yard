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

const mergeProfile = (k, l, r) => {
  switch (k) {
    case 'profile':
    case 'ships':
    case 'fleets':
    case 'slotItems':
    case 'materials':
      return R.merge(l, r);
    default:
      return r;
  }
};

const updateBaseData = (data, state) => R.mergeWithKey(mergeProfile, state, data);
const updateFleet = (fleet, state) => R.assoc('fleets', { ...fleet }, state);
const updateMaterials = (materials, state) => R.assoc('materials', { ...materials }, state);
const updateShips = (ships, state) => R.assoc('ships', { ...ships }, state);

export default createReducer(initialState, {
  [ApiEvents.GET_BASE_DATA](state, action) {
    return updateBaseData(action.payload, state);
  },
  [ApiEvents.GET_FLEET](state, action) {
    return updateShips(action.payload.ships, state);
  },
  [ApiEvents.LOAD_FLEET_PRESET](state, action) {
    return updateFleet({ [action.payload.fleetId]: action.payload.fleet }, state);
  },
  [ApiEvents.GET_MATERIAL](state, action) {
    return updateMaterials(action.payload, state);
  }
});
