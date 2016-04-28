/// <reference path="../../lib/typedefs/kancolle.d.ts" />
/// <reference path="../../lib/typedefs/dockyard.d.ts" />
/**
 * @overview
 *
 * @since 0.4.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/selectors/slot-items
 */
import R from 'ramda';
import { createSelector } from 'reselect';

const getSlotItems = state => state.player.slotItems;
const getBaseSlotItems = state => state.game.slotItems;

const getValues = R.compose(R.flatten, R.map(R.tail), R.toPairs);
const prepareBaseItems = (items) => R.indexBy(R.prop('slotItemId'), items);

const combinePlayerSlotItems = (slotItems, baseSlotItems) => R.map(it => ({
  ...baseSlotItems[it.slotItemId], ...it,
  $_combined: true
}), getValues(slotItems));

// @todo(@stuf): replace with generic functions
export const combineSlotItems = createSelector(
  [getSlotItems, getBaseSlotItems],
  (slotItems, baseSlotItems) => {
    // @todo(@stuf): why does this behave like this?
    const playerItems = getValues(slotItems);
    const baseItems = prepareBaseItems(baseSlotItems);
    return R.map(it => ({ ...baseItems[it.slotItemId], ...it, $_combined: true }), playerItems);
  });
