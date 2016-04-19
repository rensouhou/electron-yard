/// <reference path="../../../lib/typedefs/kancolle.d.ts" />
/// <reference path="../../../lib/typedefs/dockyard.d.ts" />
/**
 * @overview
 *  Handler for `CRAFT_SHIP` event
 *
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/transformers/kcsapi/craft-ship
 */
import { asBool, asNumber } from '../primitive';
import { parseMaterialsRecipe } from '../api/materials';

/**
 * @event CRAFT_SHIP
 * @param {KCSApi.API.CRAFT_SHIP} r
 * @returns {{r: ApiRequest}}
 */
export default function action$craftShip(r) {
  console.warn('action$craftShip NYI; event `CRAFT_SHIP`');
  const d = r.postBody;

  return {
    dockId: asNumber(d.api_kdock_id),
    flags: {
      instant: asBool(d.api_highspeed),
      lsc: asBool(d.api_large_flag)
    },
    recipe: parseMaterialsRecipe([0, 0, 0, 0, null, null, 0])
  };
}
