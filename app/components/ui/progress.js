/**
 * @overview
 *
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/components/ui/progress
 * @flow
 */
import React, { Component, PropTypes } from 'react';
import styles from './progress.scss';
import cx from 'classnames';

export class Progress extends Component {
  static propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    value: PropTypes.number,
    label: PropTypes.string,
    size: PropTypes.oneOf(['small', 'normal', 'large']),
    className: PropTypes.string
  };

  static defaultProps = {
    min: 0,
    max: 100,
    value: null,
    label: null,
    size: 'normal'
  };

  render() {
    const { value, max, label, size, className } = this.props;
    return (
      <div className={cx(styles.progress)}>
        <div className={cx(styles.bar, styles[size], className)} style={{ width: `${(value / max) * 100}%` }}></div>
      </div>
    );
  }
}
