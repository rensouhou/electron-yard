/**
 * @overview
 *
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/transformers/kcsapi/get-material
 */
import { ApiRequest, ApiRequestResult } from '../../types/api';
import { parseMaterialObjects } from '../api/materials';
import { getArrayOrDefault } from '../primitive';

/**
 * @event GET_MATERIAL
 * @param {__PROTO.ApiRequest} r
 */
export default function (r:ApiRequest):ApiRequestResult {
  console.log('GET_MATERIAL r:ApiRequest =>', r);
  return {
    materials: parseMaterialObjects(getArrayOrDefault(r.body))
  };
}
