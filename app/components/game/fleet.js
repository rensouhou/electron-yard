/**
 * @overview
 *
 * @since 0.4.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/components/game/fleet
 */
import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import Ship from './ship';
import css from './fleet.scss';

export class Fleet extends Component {
  static propTypes = {
    fleet: PropTypes.shape({
      ships: PropTypes.arrayOf(PropTypes.object)
    })
  };

  static defaultProps = {
    fleet: {
      ships: []
    }
  };

  renderShips = ships => ships.map(s => <Ship ship={s} />);

  render() {
    return (
      <div className={cx(css.fleet)}>
        {this.renderShips(this.props.fleet.ships)}
      </div>
    );
  }
}
