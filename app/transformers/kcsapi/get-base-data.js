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

import profile from '../profile';
import fleet from '../fleet';
import materials from '../materials';

type ApiRequest = {
  path: string,
  status: string,
  body: ?any,
  postBody: ?any
};

export default function (r:ApiRequest) {
  const event = 'GET_BASE_DATA';
  const basic = r.body.api_basic;

  const player = {
    id: basic.api_member_id,
    profile: profile(basic),
    quests: {},
    fleets: fleet(r.body.api_deck_port),
    docks: {},
    inventory: {
      ships: r.body.api_ship,
      materials: materials(r.body.api_material)
    }
  };

  // @todo(@stuf): Dispatch this through its own proper event
  [player].forEach(it => it.$_type = event);

  return { player };
}
