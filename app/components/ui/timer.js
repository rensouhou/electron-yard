/**
 * @overview
 *
 * @since 0.4.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/components/ui/timer
 * @flow
 */
import React, { Component, PropTypes } from 'react';
import { createConnector } from 'redux-rx/react';
import { bindActionCreators, observableFromStore } from 'redux-rx';
import cx from 'classnames';
import css from './timer.scss';

class Timer extends Component {
  static propTypes = {
    targetTime: PropTypes.number.isRequired,
    autoStart: PropTypes.bool,
    updateInterval: PropTypes.number
  };

  static defaultProps = {
    autoStart: true,
    updateInterval: 500
  };

  getRemainingMilliseconds = ():number => this.props.targetTime - +(new Date());

  setTimer = ():void => {
    if (!!this.timerInstance) {
      window.clearInterval(this.timerInstance);
    }
  };

  timerInstance = null;

  render() {
    const timeRemaining:number = this.getRemainingMilliseconds(this.props.targetTime);
    return (
      <div className={css.timer}>
        timer
      </div>
    );
  }
}

export { Timer };

export default Timer;
