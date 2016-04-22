/**
 * @overview
 *
 * @since 0.2.0
 * @version 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/components/ui/button
 */
import React, { Component, PropTypes } from 'react';
import styles from './button.scss';
import colors from 'material-colors/dist/colors';

export class Button extends Component {
  static propTypes = {
    children: PropTypes.any,
    color: PropTypes.string
  };

  render() {
    const { children, color, ...props } = this.props;

    return (
      <button className={styles.button} {...props}>{children}</button>
    );
  }
}
