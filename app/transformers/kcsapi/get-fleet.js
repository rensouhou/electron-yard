/**
 * @overview
 *  Handler for `GET_FLEET` event
 *
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/transformers/kcsapi/get-fleet
 * @see {@link __PROTO.AppState}
 * @flow
 */
import type { ApiRequest, ApiRequestResult } from '../../types/api';
import deprecate from 'deprecate';
import R from 'ramda';
import { getArrayOrDefault, asNumber } from '../primitive';
import { playerFleet } from '../api/player-fleet';
import { playerShip as ship } from '../api/player-ship';

type GetFleetBody = {
  api_deck_data: [any],
  api_ship_data: Array<any>
};

type GetFleetPostBody = {
  api_deck_rid: any;
};

/**
 * @event GET_FLEET
 * @param {__PROTO.ApiRequest} r
 * @todo(@stuf): remove R.indexBy(...) logic
 */
export default function (r:ApiRequest):ApiRequestResult {
  console.log('GET_FLEET r:ApiRequest =>', r);
  deprecate('Remove redundant R.indexBy(...) logic');

  const body:GetFleetBody = r.body;
  const postBody:GetFleetPostBody = r.postBody;

  const fleet = playerFleet(R.head(body.api_deck_data));
  const fleetId = asNumber(postBody.api_deck_rid);
  const ships = R.indexBy(
    R.prop('sortId'),
    R.map(ship, getArrayOrDefault(body.api_ship_data)));

  console.log('GET_FLEET done =>', { fleet, fleetId, ships });

  return { fleet, fleetId, ships };
}
