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
import { parseMaterialObjects } from '../materials';
import profile from '../profile';
import fleet from '../fleet';

/**
 * @event GET_BASE_DATA
 * @param r
 */
export default function (r:ApiRequest):ApiRequestResult {
  const basic = r.body.api_basic;

  const player = {
    id: basic.api_member_id,
    profile: profile(basic),
    fleets: r.body.api_deck_port.map(fleet),
    inventory: {
      ships: r.body.api_ship,
      materials: parseMaterialObjects(r.body.api_material)
    }
  };

  return { player };
}
