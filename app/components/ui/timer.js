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
    targetTime: PropTypes.number
  };

  render() {
    return (
      <div className={css.timer}>
        derp
      </div>
    );
  }
}

export { Timer };

export default Timer;
