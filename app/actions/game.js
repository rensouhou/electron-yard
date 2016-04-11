/* eslint quote-props: 0, no-param-reassign: 0 */
/**
 * @overview
 *
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/actions/game
 * @flow
 */
import type { ApiRequest, ApiRequestResult } from '../types/api';

import { createAction } from 'redux-actions';
import T from 'immutable';
import ApiTransformers from '../transformers/kcsapi';
import { ApiEventsByPath, ApiEvents } from '../constants/api-events';

const transformers = T.Map(ApiTransformers);

export const RECEIVED_API_DATA:string = 'RECEIVED_API_DATA';
export const PARSED_API_DATA:string = 'PARSED_API_DATA';

export { ApiEvents, ApiEventsByPath };

export const transformerActions = () => transformers.toKeyedSeq().mapEntries(([k, v]) => [k, createAction(k, v)]).toJS();

export const game = () => ({
  parseApiData: createAction(RECEIVED_API_DATA, (data:ApiRequest):ApiRequestResult => {
    const event:string = ApiEventsByPath.find((v:string, k:string) => data.path.includes(k));

    if (!transformers.has(event)) {
      console.warn(`No handler for event ${event}`);
    }
    else {
      return transformers.get(event)(data);
    }
  })
});
