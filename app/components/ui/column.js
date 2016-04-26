/**
 * @overview
 *
 * @since 0.4.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/components/ui/column
 */
import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import styles from './column.scss';

export class Column extends Component {
  static propTypes = {
    size: PropTypes.number.isRequired,
    children: PropTypes.any,
    className: PropTypes.string
  };

  render() {
    return (
      <div className={cx(styles.base, styles[`size-${this.props.size}`], this.props.className)}>
        {this.props.children}
      </div>
    );
  }
}
