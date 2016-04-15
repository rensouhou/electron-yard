/**
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/transformers/kcsapi/start-sortie
 * @flow
 */
import type { ApiRequest, ApiRequestResult } from '../../types/api';

/**
 * @event START_SORTIE
 * @param {__PROTO.ApiRequest} r
 * @returns {{$_finalized: boolean, $_nyi: boolean}}
 */
export default function (r:ApiRequest):ApiRequestResult {
  console.log('START_SORTIE r:ApiRequest =>', r);
  // Derp
  return {
    $_finalized: false,
    $_nyi: true
  };
}
