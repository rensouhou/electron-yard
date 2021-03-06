/*eslint no-underscore-dangle:0*/
/**
 * @overview
 *
 * @since 0.4.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/components/game-ui/hpbar
 */
import R from 'ramda';
import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import { Progress } from '../ui';
import css from './health-bar.scss';

const _ = R.__;

class HealthBar extends Component {
  static propTypes = {
    value: PropTypes.number,
    max: PropTypes.number
  };

  /**
   * Calculates the color for the health bar
   * @param {Number} cur
   * @param {Number} max
   */
  getHealthBarColor = ([cur, max]) => {
    const ratio = cur / max;
    const fn = R.cond([
      [R.lte(_, 0.25), R.always('red')],
      [R.lte(_, 0.5), R.always('orange')],
      [R.lte(_, 0.75), R.always('yellow')],
      [R.T, R.always('green')]
    ]);

    return fn(ratio);
  };

  render() {
    const { value, max } = this.props;
    const health = [value, max];
    const healthBarColorClass = `state-${this.getHealthBarColor(health)}`;

    return (
      <Progress className={cx(css.healthBar, css[healthBarColorClass])} value={value} max={max} />
    );
  }
}

export { HealthBar };

export default HealthBar;
