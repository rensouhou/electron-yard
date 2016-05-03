/// <reference path="../../../lib/typedefs/kancolle.d.ts" />
/// <reference path="../../../lib/typedefs/dockyard.d.ts" />
/**
 * @overview
 *
 * @since 0.4.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/components/game-ui/ship
 */
import R from 'ramda';
import Monet from 'monet';
import React, { Component, PropTypes } from 'react';
import HealthBar from './health-bar';
import { Progress, Row, Column } from '../ui';
import cx from 'classnames';
import css from './ship.scss';

class Ship extends Component {
  static propTypes = {
    ship: PropTypes.object.isRequired
  };

  render() {
    const ship = this.props.ship;
    const { morale, experience, hp } = ship;
    const expPercent = experience[2];
    const [hpCur, hpMax] = hp;

    return (
      <div className={css.ship}>
        <Row className={css.shipTitle}>
          <Column size={7} className={css.shipName}>{ship.name.kanji}</Column>
          <Column size={3} className={css.shipMorale}><i className="fa fa-heart" /> {morale}</Column>
          <Column size={2} className={css.shipLevel}>{ship.level}</Column>
        </Row>
        <Row className={css.shipBars}>
          <HealthBar value={hpCur} min={0} max={hpMax} />
          <Progress value={expPercent} min={0} max={100} size="small" />
        </Row>
      </div>
    );
  }
}

export { Ship };
