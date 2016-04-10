/**
 * @overview
 *
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/reducers/game
 */

export default function gameReducer(state = {}, action) {
  console.log('gameReducer', action.type);
  return state;
}
