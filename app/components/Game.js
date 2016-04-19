/**
 * @overview
 *
 * @since 0.2.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/components/Game
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
    const view = document.createElement('webview');
    view.src = 'http://www.dmm.com/netgame/social/-/gadgets/=/app_id=854854/';
    view.partition = 'persist:kc';
    view.style.width = '800px';
    view.style.height = '480px';
    view.nodeintegration = true;
    view.plugins = true;
    view.addEventListener('dom-ready', createGameViewHandler({ game, transformerActions }, config));

    findDOMNode(gameViewHolder).appendChild(view);

    actions.registerGameView(view);
  }

  render() {
    return <div ref="gameViewHolder" id="game-view-holder" className={styles.base}></div>;
  }
}

export default Game;
