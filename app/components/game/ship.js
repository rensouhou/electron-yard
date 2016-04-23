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

export default class Ship extends Component {
  static propTypes = {
    ship: PropTypes.object
  };

  static defaultProps = {
    ship: {}
  };

  render() {
    return (
      <div>ship</div>
    );
  }
}
