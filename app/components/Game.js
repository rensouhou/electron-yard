/**
 * @overview
 *
 * @since 0.2.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/components/Game
 */
import React, { Component, PropTypes } from 'react';

class Game extends Component {
  static propTypes = {
    gameURL: PropTypes.any
  };

  render() {
    console.log('component:Game', this.props);
    return (
      <div>
        game
      </div>
    );
  }
}

export default Game;
