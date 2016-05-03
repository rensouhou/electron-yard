/**
 * @overview
 *
 * @since 0.4.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/components/game-ui/fleet
 */
import React, { Component, PropTypes } from 'react';
import { Ship } from './ship';
import css from './fleet.scss';

class Fleet extends Component {
  static propTypes = {
    name: PropTypes.string,
    mission: PropTypes.any,
    ships: PropTypes.array,
    id: PropTypes.number
  };

  static defaultProps = {
    ships: []
  };

  render() {
    const { ships, name, id } = this.props;

    return (
      <div className={css.fleet}>
        <div className={css.fleetInfo}>
          <div className={css.fleetName}>
            {name}
          </div>
          <div className={css.fleetId}>
            {id}
          </div>
        </div>
        <div className={css.fleetShips}>
          {ships.map(s => <Ship ship={s} key={s.id || 0} />)}
        </div>
      </div>
    );
  }
}

export { Fleet };

export default Fleet;
