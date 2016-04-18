/**
 * @overview
 *
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/transformers/kcsapi/finished-practice
 * @flow
 */
import type { ApiRequest, ApiRequestResult } from '../../types/api';

/**
 * @param r
 */
export default function action$finishedPractice(r:ApiRequest):ApiRequestResult {
  return { r };
}
