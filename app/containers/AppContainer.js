/**
 * @overview
 *  Root layout for application
 *
 * @since 0.2.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/containers/App
 *
 * @todo(@stuf): this should be removed
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
