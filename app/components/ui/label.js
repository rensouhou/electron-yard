/**
 * @overview
 *
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/components/ui/label
 */
import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import css from './label.scss';

export class Label extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string
  };

  render() {
    return (
      <div className={cx(css.label, this.props.className)}>
        {this.props.children}
      </div>
    );
  }
}
