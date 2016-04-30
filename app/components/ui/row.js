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
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    verticalAlign: PropTypes.oneOf(['center', 'top', 'bottom']),
    wrap: PropTypes.bool
  };

  static defaultProps = {
    verticalAlign: 'top',
    wrap: true
  };

  render() {
    const classNames = [
      css.row,
      !this.props.wrap ? css.disableWrap : null,
      css[`verticalAlign-${this.props.verticalAlign}`],
      this.props.className
    ];
    return (
      <div className={cx(classNames)}>
        {this.props.children}
      </div>
    );
  }
}
