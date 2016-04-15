/**
 * @overview
 *
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/transformers/kcsapi/initialize-game
 * @flow
 */
import type { ApiRequest, ApiRequestResult } from '../../types/api';
import R from 'ramda';
import { baseShip } from '../api/base-ship';

/**
 * @event INITIALIZE_GAME
 * @param {__PROTO.ApiRequest} r
 */
export default function (r:ApiRequest):ApiRequestResult {
  console.log('INITIALIZE_GAME r:ApiRequest =>', r);
  const { api_mst_ship } = r.body;
  const ships = R.indexBy(R.prop('sortId'), api_mst_ship.map(baseShip));

  return { ships };
}
