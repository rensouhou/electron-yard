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

  // @todo(@stuf): clear and re-set the timer if targetTime does not match
  componentWillReceiveProps(nextProps:Object) {
    console.log('componentWillReceiveProps', this.state.timerInstance, nextProps);
    if (this.props.targetTime && this.props.targetTime !== nextProps.targetTime) {
      this.setTimer(nextProps.targetTime);
    }
    return { ...this.props, targetTime: nextProps.targetTime };
  }

  componentWillUnmount() {
    console.log('componentWillUnmount', this.timerInstance);
    if (!!this.timerInstance) {
      window.clearInterval(this.timerInstance);
    }
  }

  componentDidMount() {
    console.log('componentDidMount', this.props, this.state);
    console.log('timerInstance', typeof this.state.timerInstance, this.state.timerInstance == null, this.state.timerInstance);
    if (!!this.timerInstance) {
      console.log('no timerInstance; targetTime =>', this.props.targetTime);
      this.setTimer(this.props.targetTime);
    }
  }

  getRemainingMilliseconds = ():number => this.props.targetTime - +(new Date());

  setTimer = (targetTime:number):void => {
    console.log('setTimer =>', targetTime);
    if (!!this.state.timerInstance) {
      this.setState({ timerInstance: clearInterval(this.state.timerInstance) });
    }
    this.setState({
      timerInstance: setInterval(() => {
        if (this.getRemainingMilliseconds() <= 0) {
          this.setState({ timerInstance: clearInterval(this.state.timerInstance) });
        }
        this.setState({ timeLeft: this.getRemainingMilliseconds() });
      }, this.props.updateInterval)
    });
  };

  render() {
    console.log('Timer:render', this.props, this.state);
    console.log('setInterval =>', typeof setInterval);
    const timeRemaining:number = this.getRemainingMilliseconds(this.props.targetTime);
    return (
      <div className={css.timer}>
        <pre>
          {JSON.stringify({ props: this.props, state: this.state }, null, 2)}
        </pre>
      </div>
    );
  }
}

export { Timer };

export default Timer;
