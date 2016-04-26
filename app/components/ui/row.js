/**
 * @overview
 *
 * @since 0.4.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/components/ui/row
 */
import React, { Component, PropTypes } from 'react';
import css from './row.scss';

export class Row extends Component {
  static propTypes = {
    children: PropTypes.any
  };

  render() {
    return (
      <div className={css.row}>
        {this.props.children}
      </div>
    );
  }
}
