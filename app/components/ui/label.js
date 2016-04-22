/**
 * @overview
 *
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/components/ui/label
 */
import React, { Component, PropTypes } from 'react';
import styles from './label.scss';

export class Label extends Component {
  static propTypes = {
    children: PropTypes.any
  };

  render() {
    const { children } = this.props;

    return (
      <div className={styles.base}>
        {children}
      </div>
    );
  }
}
