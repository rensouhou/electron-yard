/**
 * @overview
 *
 * @since 0.4.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/components/ui/row
 */
import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import css from './row.scss';

export class Row extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.arrayOf(PropTypes.string)
  };

  render() {
    return (
      <div className={cx(css.row, this.props.className)}>
        {this.props.children}
      </div>
    );
  }
}
