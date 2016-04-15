/**
 * @overview
 *
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/transformers/kcsapi/get-opponent-info
 * @flow
 */
import { ApiRequest, ApiRequestResult } from '../../types/api';
import { opponentFleet } from '../api/opponent-fleet';

/**
 * @event GET_OPPONENT_INFO
 * @param r
 */
export default function (r:ApiRequest):ApiRequestResult {
  return opponentFleet(r);
}
