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

class Game extends Component {
  static propTypes = {
    gameURL: PropTypes.any,
    game: PropTypes.object,
    transformerActions: PropTypes.object
  };

  // The webview needs to be appended as a vanilla DOM element,
  // since the `plugins` attribute does not work if mounted through React.
  componentDidMount() {
    const { gameViewHolder } = this.refs;
    const { game, transformerActions } = this.props;
    const view = document.createElement('webview');
    view.src = 'http://www.dmm.com/netgame/social/-/gadgets/=/app_id=854854/';
    view.partition = 'persist:kc';
    view.style.width = '800px';
    view.style.height = '480px';
    view.nodeintegration = true;
    view.plugins = true;
    view.addEventListener('dom-ready', createGameViewHandler({ game, transformerActions }, config));

    findDOMNode(gameViewHolder).appendChild(view);
  }

  render() {
    console.log('this.props =>', this.props);
    return <div ref="gameViewHolder" id="game-view-holder"></div>;
  }
}

export default Game;
