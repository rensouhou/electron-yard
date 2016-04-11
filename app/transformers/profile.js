/**
 * @overview
 *
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/transformers/profile
 * @flow
 */
import type { ApiRequest } from '../types/api';
import type { PlayerProfile } from '../types/player-profile';

export default (d: ApiRequest): PlayerProfile => ({
  id: d.api_member_id,
  nickname: d.api_nickname,
  level: d.api_level,
  rank: d.api_rank,
  limits: {
    maxShips: d.api_max_chara,
    maxFurniture: d.api_max_kagu,
    maxSlotItems: d.api_max_slotitem
  },
  coins: d.api_fcoin,
  medals: d.api_medals,
  comment: d.api_comment,
  furniture: d.api_furniture,
  fleetCount: d.api_count_deck,
  lsc: (d.api_large_dock !== 0),
  missions: {
    total: d.api_ms_count,
    succeeded: d.api_ms_success,
    wins: (d.api_ms_count - (d.api_ms_count - d.api_ms_success)),
    losses: (d.api_ms_count - d.api_ms_success)
  },
  practice: {
    wins: d.api_pt_win,
    losses: d.api_pt_lose,
    total: (d.api_pt_win + d.api_pt_lose)
  },
  sorties: {
    wins: d.api_st_win,
    losses: d.api_st_lose,
    total: (d.api_st_win + d.api_st_lose)
  },
  docks: {
    constructionDockCount: d.api_count_kdock,
    repairDockCount: d.api_count_ndock
  },
  startTime: d.api_starttime,
  tutorial: {
    inProgress: (d.api_tutorial !== 0),
    progress: d.api_tutorial_progress
  },
  _active: (d.api_active_flag === 0),
  _playtime: d.api_playtime,
  _ptChallenged: d.api_pt_challenged,
  _ptChallengedWon: d.api_pt_challenged_won,
  _pvp: d.api_pvp,
  _commentId: d.api_comment_id,
  _nicknameId: d.api_nickname_id
});
