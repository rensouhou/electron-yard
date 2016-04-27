/**
 * @overview
 *
 * @since 0.4.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/components/game-ui/fleet
 */
import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import Ship from './ship';
import css from './fleet.scss';

class Fleet extends Component {
  static propTypes = {
    fleet: PropTypes.any
    // fleet: PropTypes.shape({
    //   ships: PropTypes.arrayOf(PropTypes.object)
    // })
  };

  static defaultProps = {
    fleet: {
      ships: []
    }
  };

  renderShips = ships => {
    console.log('renderShips', ships);
    return ships.map(s => <Ship ship={s} />);
  };

  render() {
    console.log('fleet:render', this.props);
    return (
      <div className={cx(css.fleet)}>
        {this.renderShips(this.props.fleet.ships)}
      </div>
    );
  }
}

export { Fleet };

export default Fleet;
