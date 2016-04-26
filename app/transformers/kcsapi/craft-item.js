/// <reference path="../../../lib/typedefs/kancolle.d.ts" />
/// <reference path="../../../lib/typedefs/dockyard.d.ts" />
/**
 * @overview
 *  Handler for `CRAFT_ITEM` event
 *
 * @since 0.4.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/transformers/kcsapi/craft-item
 */
import R from 'ramda';
import { asNumber, asBool } from '../primitive';
import { parseMaterialsRecipe, parseMaterialArray } from '../api/materials';

/**
 * @param {KCSApi.API.CRAFT_ITEM} r
 */
export default function action$craftItem(r) {
  return {
    flags: {
      successful: asBool(r.body.api_create_flag),
      usedDevelopmentMaterials: asBool(r.body.api_shizai_flag)
    },
    consumed: {
      recipe: parseMaterialsRecipe(R.map(asNumber, r.postBody))
    },
    materials: parseMaterialArray(r.body.api_material),
    slotItem: !R.is(Object, r.body.api_slot_item) ? null : {
      id: r.body.api_slot_item.api_id,
      slotItemId: r.body.api_slot_item.api_slotitem_id
    },
    $_finalized: false,
    $_unknown: {
      fdata: r.body.api_fdata
    }
  };
}
