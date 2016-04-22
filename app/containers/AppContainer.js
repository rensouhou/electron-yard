/// <reference path="../../lib/typedefs/kancolle.d.ts" />
/// <reference path="../../lib/typedefs/dockyard.d.ts" />
/**
 * @overview
 *  Root layout for application
 *
 * @todo(@stuf): this should be removed
 * @since 0.2.0
 * @deprecated
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/containers/app
 */
import React, { Component, PropTypes } from 'react';
import BaseContainer from './BaseContainer';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    const { children } = this.props;
    return (
      <BaseContainer>
        {children}
      </BaseContainer>
    );
  }
}
