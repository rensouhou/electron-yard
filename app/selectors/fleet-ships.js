/// <reference path="../../lib/typedefs/kancolle.d.ts" />
/// <reference path="../../lib/typedefs/dockyard.d.ts" />
/**
 * @overview
 *
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/selectors/fleet-ships
 */
import R from 'ramda';
import { createSelector } from 'reselect';
import deepAssign from 'deep-assign';

const getPlayerShips = state => state.player.ships;
const getPlayerFleets = state => state.player.fleets;
const getBaseShips = state => state.game.ships;

const pickIntoList = R.compose(R.flatten, R.map(R.tail), R.toPairs);

const getBy = key => R.propEq(key);
const getById = (id, list) => R.find(getBy('id')(id), list);
const getByShipId = (id, list) => R.find(R.propEq('shipId', id), list);

export const combineShips = createSelector(
  [getBaseShips, getPlayerShips],
  (baseShips, playerShips) => {
    const mergedShips = playerShips.map(ps => deepAssign({}, getByShipId(ps.shipId, baseShips), ps));
    return mergedShips;
  }
);

/**
 * @todo(@stuf): this is super horribad, store ships and fleets as a list instead of map
 */
export const getFleetShips = createSelector(
  [combineShips, getPlayerFleets],
  (combinedShips, playerFleets) => {
    const idLists = playerFleets.map(f => (f || {}).ships);
    const getShip = id => R.find(R.propEq('id', id), combinedShips);
    return R.mergeAll(idLists.map((ids, i) => ({ [i + 1]: ids.map(id => getShip(id)) })));
  }
);
