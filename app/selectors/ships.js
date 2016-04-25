/// <reference path="../../lib/typedefs/kancolle.d.ts" />
/// <reference path="../../lib/typedefs/dockyard.d.ts" />
/*eslint no-underscore-dangle:0*/
/**
 * @overview
 *
 * @since 0.4.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/selectors/ships
 */
import R from 'ramda';
import { createSelector } from 'reselect';

// Utility
const _ = R.__;

// Selector data
const getPlayerShips = state => state.player.ships;
const getPlayerSlotItems = state => state.player.slotItems;
const getBaseShips = state => state.game.ships;
const getBaseSlotItems = state => state.game.slotItems;

// Compose
const findByProp = (idProp, id, list) => R.find(R.propEq(idProp, id), list);
const combineItem = (l, r) => ({ ...l, ...r });
const combineTwoLists = (target, base, pk) => R.map(it =>
    combineItem(
      findByProp(pk, it[pk], base),
      findByProp(pk, it[pk], target)
    ),
  target);

const combine = R.curry(combineTwoLists);
const combineByKey = combine(_, _);

// Export usable functions
export const combineShips = createSelector([getPlayerShips, getBaseShips], combineByKey('shipId'));
// export const combineSlotItems = createSelector([getPlayerSlotItems, getBaseSlotItems], combineByKey('slotItemId'));
