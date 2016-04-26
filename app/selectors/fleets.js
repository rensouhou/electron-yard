/// <reference path="../../lib/typedefs/kancolle.d.ts" />
/// <reference path="../../lib/typedefs/dockyard.d.ts" />
/**
 * @overview
 *
 * @since 0.4.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/selectors/fleets
 */
import R from 'ramda';
import { createSelector } from 'reselect';
import { combineShips } from './ships';

const getFleets = state => state.player.fleets;

export const combineFleets = createSelector(
  [getFleets],
  fleets => fleets
);
