/// <reference path="../../../lib/typedefs/kancolle.d.ts" />
/// <reference path="../../../lib/typedefs/dockyard.d.ts" />
/**
 * @overview
 *
 * @since 0.4.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/components/game/ship
 */
import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import css from './ship.scss';

export default class Ship extends Component {
  static propTypes = {
    ship: PropTypes.object.isRequired
  };

  render() {
    return (
      <div className={cx(css.ship)}>
        {JSON.stringify(this.props.ship)}
      </div>
    );
  }
}
