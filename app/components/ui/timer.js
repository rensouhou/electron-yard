/**
 * @overview
 *
 * @since 0.4.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/components/ui/timer
 * @flow
 * @todo(@stuf): add reactive bindings to timer instead of doing it the imperative way
 */
import React, { Component, PropTypes } from 'react';
import css from './timer.scss';

class Timer extends Component {
  static propTypes = {
    targetTime: PropTypes.number,
    id: PropTypes.any,
    autoStart: PropTypes.bool,
    updateInterval: PropTypes.number
  };

  static defaultProps = {
    autoStart: true,
    updateInterval: 2000
  };

  constructor(props) {
    super(props);
    this.state = {
      timeLeft: null,
      timerInstance: null
    };
  }

  render() {
    return (
      <div className={css.timer}></div>
    );
  }
}

export { Timer };

export default Timer;
