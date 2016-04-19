/// <reference path="../../../lib/typedefs/kancolle.d.ts" />
/// <reference path="../../../lib/typedefs/dockyard.d.ts" />
/**
 * @overview
 *  Handler for `COMPLETE_QUEST` event
 *
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/transformers/kcspai/complete-quest
 */
import { asNumber } from '../primitive';
import { parseMaterialArray } from '../api/materials';

/**
 * @event COMPLETE_QUEST
 * @param {KCSApi.API.COMPLETE_QUEST} r
 */
export default function action$completeQuest(r) {
  const body = r.body;
  const postBody = r.postBody;

  return {
    id: asNumber(postBody.api_quest_id),
    materials: parseMaterialArray(body.api_material),
    rewards: {
      count: body.api_bounus_count,
      items: body.api_bounus
    }
  };
}
