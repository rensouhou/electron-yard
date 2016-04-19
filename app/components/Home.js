/**
 * @overview
 *
 * @since 0.2.0
 * @author Stefan Rimaila
 * @module app/components/Home
 */
import React, { Component } from 'react';
import GameContainer from '../containers/GameContainer';
import HomeUIContainer from '../containers/HomeUIContainer';
import styles from './Home.scss';

export default class Home extends Component {
  render() {
    return (
      <div className={styles.base}>
        <GameContainer />
        <HomeUIContainer />
      </div>
    );
  }
}
