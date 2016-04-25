/// <reference path="../../lib/typedefs/kancolle.d.ts" />
/// <reference path="../../lib/typedefs/dockyard.d.ts" />
/**
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/components/home-ui
 * @flow
 */
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
    const { player, selectors, actions, children, core } = this.props;
    const profile:PlayerProfile = player.profile;
    const screenshotHandler:Function = this.handleScreenshotClick(
      (actions || {}).takeScreenshot,
      (core || {}).webview);

    console.log(this.props);

    const notifyTestHandler = (event:Event) => {
      event.preventDefault();
      actions.notify('This is a test', { body: 'and a wonderful test it is' });
    };

    return (
      <div className={styles.base}>
        <div className={styles.topBar}>
          <Button onClick={screenshotHandler}>Grab</Button>
          <Button onClick={notifyTestHandler}>Notify</Button>
          <Label>Game state: <strong>{this.props.gameState}</strong></Label>
          <Label>HQ Level: <strong>{profile.level}</strong></Label>
          <Label>Ships: <strong>{player.ships.length} / {profile.limits.maxShips}</strong></Label>
          <Label>Equipment: <strong>{player.slotItems.length} / {profile.limits.maxSlotItems}</strong></Label>
        </div>
        <div className={styles.testFleet}>
          There was a fleet here, but now it's gone.
        </div>
        <div className={styles.mainView}>
          {JSON.stringify(player.materials, null, 2)}
        </div>
      </div>
    );
  }
}
