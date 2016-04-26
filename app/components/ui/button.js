/**
 * @overview
 *
 * @since 0.2.0
 * @version 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/components/ui/button
 */
import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import styles from './button.scss';
import colors from 'material-colors/dist/colors';

export class Button extends Component {
  static propTypes = {
    children: PropTypes.any,
    color: PropTypes.string
  };

  static defaultProps = {
    color: 'pink'
  };

  render() {
    const { children, color, ...props } = this.props;

    return (
      <button className={cx(styles.button, styles[`color-${color}`])} {...props}>{children}</button>
    );
  }
}
