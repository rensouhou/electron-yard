/// <reference path="../../lib/typedefs/kancolle.d.ts" />
/// <reference path="../../lib/typedefs/dockyard.d.ts" />
/**
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/components/home-ui
 * @flow
 */
import R from 'ramda';
import type { PlayerProfile } from '../types/player-profile';
import React, { Component, PropTypes } from 'react';
import { Button, Progress, Label } from './ui';
import styles from './HomeUI.scss';

export default class HomeUI extends Component {
  static propTypes = {
    game: PropTypes.object,
    gameState: PropTypes.string,
    player: PropTypes.object.isRequired,
    actions: PropTypes.object,
    selectors: PropTypes.object
  };

  handleScreenshotClick = (handler:Function, webview:Element) => {
    if (!(typeof handler === 'function' && !!webview)) return;
    return function handler$handleScreenshotClick(e) {
      e.preventDefault();
      handler(webview);
    };
  };

  render() {
    const { player, selectors, children, core, actions } = this.props;
    const profile:PlayerProfile = player.profile;
    const handler:Function = this.handleScreenshotClick(
      (actions || {}).takeScreenshot,
      (core || {}).webview);

    const a = selectors.fleetShips['1'];

    return (
      <div className={styles.base}>
        <div className={styles.topBar}>
          <Button onClick={handler}>Screenshot</Button>
          <Label>Game state: <strong>{this.props.gameState}</strong></Label>
          <Label><strong>{profile.nickname}</strong></Label>
          <Label>Level: <strong>{profile.level}</strong></Label>
          <Label>Coins: <strong>{profile.coins}</strong></Label>
        </div>
        <div className={styles.testFleet}>
          {(a || []).map(s => {
            const [cur, max] = s.hp;
            return (
              <div key={s.id} className={styles.testShip}>
                <div>
                  {s.name.kanji}
                </div>
                <Progress min={0} max={max} val={cur} label={`${cur} / ${max}`} />
              </div>
            );
          })}
        </div>
        <div className={styles.mainView}>
          {JSON.stringify(player.materials, null, 2)}
        </div>
      </div>
    );
  }
}
