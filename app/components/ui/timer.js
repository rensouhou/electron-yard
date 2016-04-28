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
import cx from 'classnames';
import R from 'ramda';
import S from 'sanctuary';
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

  constructor(props) {
    super(props);
    this.state = {
      timeLeft: null
    };
  }

  // @todo(@stuf): clear and re-set the timer if targetTime does not match
  componentWillReceiveProps(nextProps:Object) {
    if (this.props.targetTime !== nextProps.targetTime) {
      this.setTimer(nextProps.targetTime);
    }
    return { ...this.props, targetTime: nextProps.targetTime };
  }

  componentWillUnmount() {
    if (!!this.timerInstance) {
      window.clearInterval(this.timerInstance);
    }
  }

  getRemainingMilliseconds = ():number => this.props.targetTime - +(new Date());

  setTimer = (targetTime:number):void => {
    if (!!this.timerInstance) {
      clearInterval(this.timerInstance);
    }
    this.timerInstance = setInterval(() => {
      if (this.getRemainingMilliseconds() <= 0) {
        clearInterval(this.timerInstance);
      }
      this.setState({ timeLeft: this.getRemainingMilliseconds() });
    }, this.props.updateInterval);
  };

  timerInstance = null;

  render() {
    const timeRemaining:number = this.getRemainingMilliseconds(this.props.targetTime);
    return (
      <div className={css.timer}>
        {this.state.timeLeft}
      </div>
    );
  }
}

export { Timer };

export default Timer;
