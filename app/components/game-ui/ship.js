/// <reference path="../../../lib/typedefs/kancolle.d.ts" />
/// <reference path="../../../lib/typedefs/dockyard.d.ts" />
/**
 * @overview
 *
 * @since 0.4.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/components/game-ui/ship
 */
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
    const { ship } = this.props;

    return (
      <div className={cx(css.ship)}>
        <Row>
          <Column size={6}>{ship.name.kanji}</Column>
          <Column size={6}>{ship.level}</Column>
        </Row>
        <Row>
          <HealthBar cur={ship.hp[0]} max={ship.hp[1]} />
        </Row>
        <Row>
          <Progress cur={ship.experience[2]} size="small" />
        </Row>
      </div>
    );
  }
}

export { Ship };

export default Ship;
