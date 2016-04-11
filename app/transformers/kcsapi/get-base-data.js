/* eslint no-param-reassign: 0, no-return-assign: 0 */
/**
 * @overview
 *
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/transformers/kcsapi/get-base-data
 * @see {@link __PROTO.AppState}
 * @flow
 */
import type { ApiRequest, ApiRequestResult } from '../../types/api';
import profile from '../profile';
import fleet from '../fleet';
import materials from '../materials';

// Entry point
export default function (r: ApiRequest): ApiRequestResult {
  console.log('get-base-data:Handler', r);
  const basic = r.body.api_basic;

  const player = {
    id: basic.api_member_id,
    profile: profile(basic),
    quests: {},
    fleets: r.body.api_deck_port.map(fleet),
    docks: {},
    inventory: {
      ships: r.body.api_ship,
      materials: materials(r.body.api_material)
    }
  };

  return { player };
}
