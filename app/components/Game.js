/// <reference path="../../lib/typedefs/kancolle.d.ts" />
/// <reference path="../../lib/typedefs/dockyard.d.ts" />
/**
 * @overview
 *
 * @since 0.2.0
 * @version 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/components/game
 */
import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { createGameViewHandler } from '../core/game-data-handler';
import config from '../config';
import styles from './Game.scss';

class Game extends Component {
  static propTypes = {
    actions: PropTypes.shape({
      takeScreenshot: PropTypes.func,
      registerGameView: PropTypes.func
    }),
    game: PropTypes.object.isRequired,
    transformerActions: PropTypes.object.isRequired
  };

  // The webview needs to be appended as a vanilla DOM element,
  // since the `plugins` attribute does not work if mounted through React.
  componentDidMount() {
    const { gameViewHolder } = this.refs;
    const { actions, game, transformerActions } = this.props;
    const view = Object.assign(document.createElement('webview'), {
      nodeintegration: true,
      plugins: true,
      partition: 'persist:kc',
      src: 'http://www.dmm.com/netgame/social/-/gadgets/=/app_id=854854/'
    });
    view.addEventListener('dom-ready', createGameViewHandler({ game, transformerActions }, config));
    findDOMNode(gameViewHolder).appendChild(view);
    actions.registerGameView(view);
  }

  render() {
    return <div ref="gameViewHolder" id="game-view-holder" className={styles.base}></div>;
  }
}

export default Game;
