/**
 * @overview
 *
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/transformers/kcsapi/initialize-game
 * @flow
 */
import type { ApiRequest, ApiRequestResult } from '../../types/api';
import { parseMaterialArray } from '../materials';
import { asNumber } from '../primitive';

const ship = (s) => ({
  id: s.api_id,
  name: {
    kanji: s.api_name,
    reading: s.api_yomi
  },
  scrapGains: parseMaterialArray(s.api_broken),
  remodel: {
    level: s.api_afterlv,
    remodelsToId: asNumber(s.api_aftershipid)
  },
  flavor: s.api_getmes,
  buildTime: s.api_buildtime
});

// Transformer
export default function (r:ApiRequest):ApiRequestResult {
  const ships = r.body.api_mst_ship.map(ship);

  return { ships };
}
