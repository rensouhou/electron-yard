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

export class Progress extends Component {
  static propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    val: PropTypes.number,
    label: PropTypes.string
  };

  static defaultProps = {
    min: 0,
    max: 100,
    val: null,
    label: null
  };

  render() {
    const { val, max, label } = this.props;
    return (
      <div className={styles.base}>
        <div className={styles.bar} style={{ width: `${(val / max) * 100}%` }}></div>
        <div className={styles.label}>
          <span>{label}</span>
        </div>
      </div>
    );
  }
}
