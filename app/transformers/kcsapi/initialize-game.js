/**
 * @overview
 *
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/transformers/kcsapi/initialize-game
 * @flow
 */
import type { ApiRequest, ApiRequestResult } from '../../types/api';
import { baseShip } from '../api/base-ship';

/**
 * @event INITIALIZE_GAME
 * @param r
 */
export default function (r:ApiRequest):ApiRequestResult {
  const { api_mst_ship } = r.body;
  const ships = api_mst_ship.map(baseShip);

  return { ships };
}
