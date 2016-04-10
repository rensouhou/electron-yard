/**
 * @overview
 *
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/actions/game
 */
import { createAction } from 'redux-actions';

export const RECEIVED_API_DATA = 'RECEIVED_API_DATA';

export const parseApiData = createAction(RECEIVED_API_DATA, (data) => {
  // console.log('lerp');
  return data;
});
