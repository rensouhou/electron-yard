/// <reference path="../../../lib/typedefs/kancolle.d.ts" />
/// <reference path="../../../lib/typedefs/dockyard.d.ts" />
/**
 * @overview
 *  Handler for `GET_SORTIE_CONDITIONS` event
 *
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/transformers/kcsapi/get-sortie-conditions
 * @flow
 */
import type { ApiRequest, ApiRequestResult } from '../../types/api';
import { asNumber } from '../primitive';

/**
 * @event GET_SORTIE_CONDITIONS
 * @param {Dockyard.API.GetSortieConditions} r
 * @returns {__PROTO.ApiRequestResponse}
 */
export default function action$getSortieConditions(r:ApiRequest):ApiRequestResult {
  const { api_win, api_lose, api_rate } = r.body.api_war;
  return {
    win: asNumber(api_win),
    lose: api_lose,
    rate: api_rate,
    $_finalized: false
  };
}
