/**
 * @overview
 *
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/transformers/kcsapi
 * @see {@link __PROTO.AppState}
 */

const transformers = {
  FINISHED_SORTIE: require('./finished-sortie'),
  GET_BASE_DATA: require('./get-base-data'),
  GET_FLEET: require('./get-fleet'),
  GET_MATERIAL: require('./get-material'),
  GET_QUEST_LIST: require('./get-quest-list'),
  GET_OPPONENT_INFO: require('./get-opponent-info'),
  GET_PLAYER_BASE_DATA: require('./get-player-base-data'),
  LOAD_FLEET_PRESET: require('./load-fleet-preset'),
  INITIALIZE_GAME: require('./initialize-game'),
  START_SORTIE: require('./start-sortie'),
  START_QUEST: require('./start-quest'),
  START_PVP_BATTLE: require('./start-pvp-battle')
};

export default transformers;
