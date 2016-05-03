/// <reference path="../../lib/typedefs/kancolle.d.ts" />
/// <reference path="../../lib/typedefs/dockyard.d.ts" />
/**
 * @overview
 *
 * @since 0.2.0
 * @author Stefan Rimaila
 * @module app/components/home
 */
import React, { Component } from 'react';
import GameContainer from '../containers/GameContainer';
import HomeUIContainer from '../containers/HomeUIContainer';
import SidebarContainer from '../containers/SidebarContainer';
import css from './Home.scss';

export default class Home extends Component {
  render() {
    return (
      <div className={css.base}>
        <div className={css.leftSide}>
          <GameContainer />
          <HomeUIContainer />
        </div>
        <div className={css.rightSide}>
          <SidebarContainer />
        </div>
      </div>
    );
  }
}
