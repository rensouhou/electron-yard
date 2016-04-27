/// <reference path="../../lib/typedefs/kancolle.d.ts" />
/// <reference path="../../lib/typedefs/dockyard.d.ts" />
/**
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/components/home-ui
 * @flow
 */
import type { PlayerProfile } from '../types/player-profile';
import R from 'ramda';
import React, { Component, PropTypes } from 'react';
import { Button, Progress, Label, Column, Row } from './ui';
import { Fleet } from './game-ui';
import css from './HomeUI.scss';

export default class HomeUI extends Component {
  static propTypes = {
    game: PropTypes.object,
    gameState: PropTypes.string,
    player: PropTypes.object.isRequired,
    actions: PropTypes.object,
    selectors: PropTypes.object,
    models: PropTypes.object
  };

  handleScreenshotClick = (handler:Function, webview:Element) => {
    if (!(typeof handler === 'function' && !!webview)) return;
    return function handler$handleScreenshotClick(e) {
      e.preventDefault();
      handler(webview);
    };
  };

  render() {
    const { player, models, selectors, actions, children, core } = this.props;
    const profile:PlayerProfile = player.profile;
    const { limits } = profile;
    const screenshotHandler:Function = this.handleScreenshotClick(
      (actions || {}).takeScreenshot,
      (core || {}).webview);

    console.log(this.props);

    const notifyTestHandler = (event:Event) => {
      event.preventDefault();
      actions.notify('This is a test', { body: 'and a wonderful test it is' });
    };

    const resources = R.toPairs(player.materials);
    const defaultFleet = R.head(player.fleets);
    const defaultFleetShips = R.props(
      ((defaultFleet || {}).ships || []),
      R.path(['gameEntities', 'entities', 'ships'], this.props));

    return (
      <div className={css.base}>
        <Row className={css.topBar} verticalAlign="center">
          <Button onClick={screenshotHandler}>Grab</Button>
          <Button onClick={notifyTestHandler}>Notify</Button>
          <Label>Game state: <strong>{this.props.gameState}</strong></Label>
          <Label>HQ Level: <strong>{profile.level}</strong></Label>
          <Label>Ships <strong>{models.ships.length}/{limits.maxShips}</strong></Label>
          <Label>Equip <strong>{models.slotItems.length}/{limits.maxSlotItems}</strong></Label>
        </Row>

        <Row>
          <Column size={4} className={css.resources}>
            {resources.map(([key, it]) => (
              <div key={key} className={css.resource}>
                <div className={css.resourceKey}>
                  {key}
                </div>
                <div className={css.resourceValue}>
                  {it}
                </div>
              </div>
            ))}
          </Column>

          <Column size={8} className={css.fleetInfo}>
            <div className={css.fleet}>
              <div className={css.fleetShips}>
                {(defaultFleetShips || []).map(s => (
                  <div key={s.id} className={css.fleetShip}>
                    <div className={css.shipTitle}>
                      <div className={css.shipName}>
                        {s.name.kanji}
                      </div>
                      <div className={css.shipLevel}>
                        {s.level}
                      </div>
                    </div>
                    <div className={css.shipBars}>
                      <Progress min={0} max={s.hp[1]} value={s.hp[0]} />
                      <Progress min={0} max={100} value={s.experience[2]} size="small" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Column>
        </Row>
      </div>
    );
  }
}
