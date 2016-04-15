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
  GET_FLEET: require('./get-fleet'),
  GET_MATERIAL: require('./get-material'),
  INITIALIZE_GAME: require('./initialize-game'),
  START_SORTIE: require('./start-sortie')
};

export default transformers;
