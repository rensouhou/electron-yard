/// <reference path="../../../lib/typedefs/kancolle.d.ts" />
/// <reference path="../../../lib/typedefs/dockyard.d.ts" />
/**
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/transformers/api/player-ship
 * @flow
 */
import { asBool } from '../primitive';

/**
 * @param {KCS.Models.PlayerShip} s
 * @returns {Dockyard.PlayerData.Ship}
 */
const playerShip = (s) => ({
  id: s.api_id,
  sortId: s.api_sortno,
  level: s.api_lv,
  experience: s.api_exp,
  morale: s.api_cond,
  stars: s.api_stars,
  slot: {
    count: s.api_slotnum,
    items: s.api_slot
  },
  fuel: s.api_fuel,
  ammo: s.api_bull,
  hp: [s.api_nowhp, s.api_maxhp],
  stats: {
    evasion: s.api_kaihi,
    torpedo: {
      withEquip: s.api_raisou
    },
    endurance: {
      withEquip: s.api_taik
    },
    antiAir: {
      withEquip: s.api_taiku
    },
    antiSub: s.api_taisen,
    armor: {
      base: s.api_souk,
      withEquip: s.api_soukou
    },
    los: {
      base: s.api_saku,
      withEquip: s.api_sakuteki
    }
  },
  repair: {
    cost: (([fuel, steel]) => ({ fuel, steel }))(s.api_ndock_item),
    time: s.api_ndock_time,
    timeStr: s.api_ndock_time_str
  },
  flags: {
    isLocked: asBool(s.api_locked),
    isSlotItemLocked: asBool(s.api_locked_equip)
  },
  $_finalized: false,
  $_wip: true
});

export { playerShip };
