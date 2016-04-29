/**
 * @overview
 *
 * @since 0.4.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/components/game-ui/fleet
 */
import R from 'ramda';
import S from 'sanctuary';
import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import { Ship } from './ship';
import css from './fleet.scss';

class Fleet extends Component {
  static propTypes = {
    fleet: PropTypes.object
  };

  static defaultProps = {
    fleet: {
      ships: []
    }
  };

  renderShips = (ships = []) => ships.map(s => <Ship ship={s} />);

  render() {
    console.log(S);
    console.log(S.Maybe);
    return (
      <div className={cx(css.fleet)}>
        <div className={css.fleetShips}>
          {!!(this.props.fleet && this.props.fleet.ships) ? this.renderShips(this.props.fleet.ships) : null}
        </div>
      </div>
    );
  }
}

export { Fleet };

export default Fleet;
