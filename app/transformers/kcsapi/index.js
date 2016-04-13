/**
 * @overview
 *
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/transformers/kcsapi
 * @see {@link __PROTO.AppState}
 */

const transformers = {
  GET_BASE_DATA: require('./get-base-data'),
  INITIALIZE_GAME: require('./initialize-game')
};

export default transformers;
