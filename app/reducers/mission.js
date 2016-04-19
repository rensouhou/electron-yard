/// <reference path="../../lib/typedefs/kancolle.d.ts" />
/// <reference path="../../lib/typedefs/dockyard.d.ts" />
/**
 * @overview
 *
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/reducers/mission
 * @flow
 */
import R from 'ramda';
import createReducer from './create-reducer';
import { ApiEvents } from '../actions/game';

type MissionReducerInitialState = {
  active: {[fleetId: number]: number}
};

const initialState:MissionReducerInitialState = {
  active: {}
};

const startMission = (data, state) => R.merge(state, data);
const completeMission = (data, state) => R.merge(state, data);

const reducerActions = {
  /**
   * @param state
   * @param {Dockyard.API.StartMission} action
   */
  [ApiEvents.START_MISSION](state, action) {
    return startMission({ [action.payload.fleetId]: action.payload.completion }, state);
  },
  /**
   * @param state
   * @param {Dockyard.API} action
   */
  [ApiEvents.COMPLETE_MISSION](state, action) {
    return completeMission({ [action.payload.fleetId]: null }, state);
  }
};

export default createReducer(initialState, reducerActions);
