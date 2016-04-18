/// <reference path="../../../lib/typedefs/kancolle.d.ts" />
/// <reference path="../../../lib/typedefs/dockyard.d.ts" />
/**
 * @overview
 *
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/transformers/kcsapi/load-fleet-preset
 */
import { playerFleet } from '../api/player-fleet';
import { asNumber } from '../primitive';

/**
 * @event LOAD_FLEET_PRESET
 * @param {__PROTO.ApiRequest} r
 * @returns {__PROTO.ApiRequestResponse}
 */
export default function action$loadFleetPreset(r) {
  return {
    fleet: playerFleet(r.body),
    fleetId: asNumber(r.postBody.api_deck_id),
    presetId: asNumber(r.postBody.api_preset_no)
  };
}
