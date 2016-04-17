/// <reference path="../../../lib/typedefs/kancolle.d.ts" />
/// <reference path="../../../lib/typedefs/dockyard.d.ts" />
/**
 * @overview
 *
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/reducers/practice
 */
import createReducer from './create-reducer';
import { ApiEvents } from '../actions/game';

const initialState = {
  opponents: {}
};

const upsertOpponent = (opponentObj, o) => ({ ...opponentObj, o });

export default createReducer(initialState, {
  [ApiEvents.GET_OPPONENT_INFO](state, action) {
    return {
      ...state,
      opponents: {
        ...state.opponents,
        ...{ [action.payload.id]: upsertOpponent(action.payload) }
      }
    };
  }
});
