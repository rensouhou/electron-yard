/**
 * @overview
 *
 * @since 0.2.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/actions/game
 */
import invariant from 'invariant';

/** @type {string} Register a reference to the <webview /> holding the game SWF */
export const REGISTER_GAME_VIEW = 'REGISTER_GAME_VIEW';

export const UPDATE_CONFIGURATION = 'UPDATE_CONFIGURATION';

/**
 * Action Creators
 */

export function registerGameView(webview) {
  invariant(webview, 'A webview is required.');

  return {
    type: REGISTER_GAME_VIEW,
    payload: {
      webview
    }
  };
}
