/**
 * @overview
 *
 * @since 0.2.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/containers/Game
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { registerGameView } from '../actions/app-core';
import Game from '../components/Game';

class GameContainer extends Component {
  static propTypes = {
    gameURL: PropTypes.any
  };

  render() {
    console.log('GameContainer.render:this.props =', this.props);
    const { gameURL } = this.props;

    return <Game gameURL={gameURL} />;
  }
}

export default connect(
  null,
  { registerGameView }
)(GameContainer);
