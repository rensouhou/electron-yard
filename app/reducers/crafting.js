/**
 * @overview
 *
 * @since 0.3.0
 * @version 0.4.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/reducers/crafting
 */
import createReducer from './create-reducer';
import { ApiEvents } from '../actions/game';

const initialState = {
  flags: {
    shipCrafted: null
  }
};

export default createReducer(initialState, {
  [ApiEvents.CRAFT_ITEM](state, action) {
    return { ...state, ...action.payload };
  },
  [ApiEvents.CRAFT_SHIP](state, action) {
    return { ...state, ...action.payload, flags: { shipCrafted: true } };
  },
  [ApiEvents.GET_CONSTRUCTION_DOCKS](state, action) {
    console.log(`${ApiEvents.GET_CONSTRUCTION_DOCKS} =>`, state, action);
    return { ...state, craftedShip: action.payload };
  }
});
