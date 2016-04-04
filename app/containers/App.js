/**
 * @overview
 *  Root layout for application
 *
 * @since 0.2.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/containers/App
 */
import React, { Component, PropTypes } from 'react';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  renderDevTools = () => {
    if (process.env.NODE_ENV !== 'production') {
      const DevTools = require('./DevTools');
      return <DevTools />;
    }
  };

  render() {
    return (
      <div>
        {this.props.children}
        {this.renderDevTools()}
      </div>
    );
  }
}
