/**
 * @overview
 *
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/types/api
 * @flow
 */

export type ApiRequest = {
  path: string,
  status: string,
  body: ?any,
  postBody: ?any
};

export type ApiRequestResult = any;
