/// <reference path="../../../lib/typedefs/kancolle.d.ts" />
/// <reference path="../../../lib/typedefs/dockyard.d.ts" />
/**
 * @overview
 *
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/transformers/api/opponent-fleet
 */
import { asBool, getObjectOrDefault } from '../primitive';

/**
 * @param d
 */
export const opponentFleet = (d) => ({
  id: d.api_member_id,
  level: d.api_level,
  comment: d.api_cmt,
  nickname: d.api_nickname,
  rank: d.api_rank,
  counts: {
    ships: d.api_ship,
    slotItems: d.api_slotitem
  },
  fleet: {
    name: d.api_deckname,
    ships: getObjectOrDefault(d.api_deck).api_ships
  },
  $_unknown: {
    friend: asBool(d.api_friend),
    commentId: d.api_cmt_id,
    nameId: d.api_deckname_id,
    nicknameId: d.api_nickname_id
  }
});
