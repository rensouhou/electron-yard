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
 * @param {KCS.Models.BaseSlotItem} o
 * @returns {Dockyard.BaseData.SlotItem}
 */
export const slotItem = o => {
  const { api_id, api_sortno, api_name, api_type, ...rest } = o;

  return {
    id: api_id,
    sortId: api_sortno,
    name: api_name,
    type: api_type,
    endurance: api_taik,
    $_finalized: false,
    $_rest: rest
  };
};
