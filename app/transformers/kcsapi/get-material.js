/**
 * @overview
 *  Handler for `GET_MATERIAL` event
 *
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/transformers/kcsapi/get-material
 * @see {@link __PROTO.AppState}
 * @flow
 */
import { ApiRequest, ApiRequestResult } from '../../types/api';
import { parseMaterialObjects } from '../api/materials';
import { getArrayOrDefault } from '../primitive';

type GetMaterial = Array<any>;

type GetMaterialPost = null;

/**
 * @event GET_MATERIAL
 * @param {__PROTO.ApiRequest} r
 */
export default function (r:ApiRequest):ApiRequestResult {
  return {
    materials: parseMaterialObjects(getArrayOrDefault(r.body))
  };
}
