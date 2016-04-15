/// <reference path="../../../lib/typedefs/kancolle.d.ts" />
/// <reference path="../../../lib/typedefs/dockyard.d.ts" />
/**
 * @overview
 *
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/transformers/api/base-slotitem
 */

/**
 * @param {KCSApi.Models.BaseSlotItem} it
 * @returns {Dockyard.BaseData.SlotItem}
 */
export const slotItem = it => ({
  id: it.api_id
});
