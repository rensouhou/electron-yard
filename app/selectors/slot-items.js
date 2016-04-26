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

// @todo(@stuf): replace with generic functions
export const combineSlotItems = createSelector(
  [getSlotItems, getBaseSlotItems],
  (slotItems, baseSlotItems) => {
    // @todo(@stuf): why does this behave like this?
    const playerItems = R.pipe(R.toPairs, R.map(R.tail), R.flatten)(slotItems);
    const baseItems = R.indexBy(R.prop('slotItemId'), baseSlotItems);
    return R.map(it => ({ ...baseItems[it.slotItemId], ...it, $_combined: true }), playerItems);
  });
