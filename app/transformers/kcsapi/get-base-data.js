/* eslint no-param-reassign: 0, no-return-assign: 0 */
/**
 * @overview
 *  Handler for `GET_BASE_DATA` event
 *
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/transformers/kcsapi/get-base-data
 * @see {@link __PROTO.AppState}
 * @flow
 */
import type { ApiRequest, ApiRequestResult } from '../../types/api';
import R from 'ramda';
import { parseMaterialObjects } from '../api/materials';
import { playerShip as ship } from '../api/player-ship';
import { playerProfile as profile } from '../api/player-profile';
import { playerFleet as fleet } from '../api/player-fleet';

/**
 * @event GET_BASE_DATA
 * @param {KCSApi.API.GET_BASE_DATA} r
 * @returns {Dockyard.API.GetBaseData}
 */
export default function action$getBaseData(r:ApiRequest):ApiRequestResult {
  const basic = r.body.api_basic;

  const player = {
    id: basic.api_member_id,
    profile: profile(basic),
    fleets: R.indexBy(R.prop('id'), r.body.api_deck_port.map(fleet)),
    ships: R.indexBy(R.prop('sortId'), r.body.api_ship.map(ship)),
    materials: parseMaterialObjects(r.body.api_material)
  };

  return { player };
}
