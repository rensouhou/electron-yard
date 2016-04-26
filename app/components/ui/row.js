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
    className: PropTypes.arrayOf(PropTypes.string),
    verticalAlign: PropTypes.oneOf(['center', 'top', 'bottom'])
  };

  static defaultProps = {
    verticalAlign: 'top'
  };

  render() {
    return (
      <div className={cx(css.row, css[`verticalAlign-${this.props.verticalAlign}`], this.props.className)}>
        {this.props.children}
      </div>
    );
  }
}
