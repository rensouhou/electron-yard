/**
 * @overview
 *
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/transformers/api/base-ship
 */
import { asNumber, formatLineBreaks } from '../primitive';
import { parseMaterialArray } from '../materials';

/**
 * @param s
 * @returns {Dockyard.BaseData.Ship}
 */
const baseShip = (s) => ({
  id: s.api_id,
  sortId: s.api_sortno,
  name: {
    kanji: s.api_name,
    reading: s.api_yomi
  },
  stats: {
    firepower: {
      base: s.api_houg
    },
    torpedo: {
      base: s.api_raig
    },
    endurance: {
      base: s.api_taik
    },
    antiAir: {
      base: s.api_tyku
    },
    luck: {
      base: s.api_luck
    },
    range: s.api_leng,
    speed: s.api_soku
  },
  rarity: s.api_backs,
  gains: {
    scrap: parseMaterialArray(s.api_broken),
    modernize: s.api_powup
  },
  slots: {
    count: s.api_slot_num,
    planeSlotCapacity: s.api_maxeq
  },
  type: s.api_stype,
  shipExtraVoices: s.api_voicef,
  capacity: {
    bullets: {
      max: s.api_bull_max
    },
    fuel: {
      max: s.api_fuel_max
    }
  },
  remodel: {
    level: s.api_afterlv,
    remodelsToId: asNumber(s.api_aftershipid)
  },
  flavorText: formatLineBreaks(s.api_getmes),
  buildTime: s.api_buildtime
});

export { baseShip };
