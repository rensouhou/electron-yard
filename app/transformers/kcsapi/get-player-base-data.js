/// <reference path="../../../lib/typedefs/kancolle.d.ts" />
/// <reference path="../../../lib/typedefs/dockyard.d.ts" />
/**
 * @overview
 *  Handler for `GET_PLAYER_BASE_DATA` event
 *
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/transformers/kcsapi/get-player-base-data
 * @flow
 */
import type { ApiRequest, ApiRequestResult } from '../../types/api';

export default function action$getPlayerBaseData(r:ApiRequest):ApiRequestResult {
  const {
          api_basic,
          api_slot_item,
          api_unsetslot,
          api_kdock,
          api_useitem,
          api_furniture
        } = r.body;

  return {
    slotItems: {
      items: api_slot_item,
      unused: api_unsetslot,
      used: api_useitem
    },
    constructionDocks: api_kdock,
    furniture: api_furniture
  };
}
