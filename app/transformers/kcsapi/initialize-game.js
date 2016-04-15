/// <reference path="../../../lib/typedefs/kancolle.d.ts" />
/// <reference path="../../../lib/typedefs/dockyard.d.ts" />
/**
 * @overview
 *  Handler for `INITIALIZE_GAME` event
 *
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/transformers/kcsapi/initialize-game
 * @flow
 */
import type { ApiRequest, ApiRequestResult } from '../../types/api';
import R from 'ramda';
import { baseShip } from '../api/base-ship';
// import { baseSlotItem } from '../api/base-slotitem';

/**
 * @event INITIALIZE_GAME
 * @param {__PROTO.ApiRequest} r
 */
export default function (r:ApiRequest):ApiRequestResult {
  const { api_mst_ship, api_mst_slotitem } = r.body;

  return {
    ships: R.indexBy(R.prop('sortId'), api_mst_ship.map(baseShip))
  };
}
