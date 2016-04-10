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

class Game extends Component {
  static propTypes = {
    gameURL: PropTypes.any,
    parseApiData: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { gameViewHolder } = this.refs;
    const { parseApiData } = this.props;
    const view = document.createElement('webview');
    view.src = 'http://www.dmm.com/netgame/social/-/gadgets/=/app_id=854854/';
    view.partition = 'persist:kc';
    view.style.width = '800px';
    view.style.height = '480px';
    view.style.border = 'solid 2px #f00';
    view.nodeintegration = true;
    view.plugins = true;
    view.addEventListener('dom-ready', createGameViewHandler(parseApiData));

    findDOMNode(gameViewHolder).appendChild(view);
  }

  render() {
    return <div ref="gameViewHolder"></div>;
  }
}

export default Game;
