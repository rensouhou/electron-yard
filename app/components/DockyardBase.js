/// <reference path="../../lib/typedefs/kancolle.d.ts" />
/// <reference path="../../lib/typedefs/dockyard.d.ts" />
/**
 * @overview
 *
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/components/dockyard-base
 */
import React, { Component, PropTypes } from 'react';
import styles from './DockyardBase.scss';

export default class DockyardBase extends Component {
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
