/**
 * @overview
 *
 * @since 0.2.0
 * @author Stefan Rimaila
 * @module app/components/Home
 */
import React, { Component } from 'react';
import GameContainer from '../containers/GameContainer';

export default class Home extends Component {
  render() {
    return (
      <GameContainer />
    );
  }
}
