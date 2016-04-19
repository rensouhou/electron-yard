/**
 * @overview
 *
 * @since 0.2.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/components/ui/button
 */
import React, { Component, PropTypes } from 'react';
import styles from './button.scss';

export class Button extends Component {
  static propTypes = {
    children: PropTypes.any
  };

  render() {
    const { children, ...props } = this.props;

    return (
      <button className={styles.button} {...props}>{children}</button>
    );
  }
}
