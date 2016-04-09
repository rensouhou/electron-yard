/**
 * @overview
 *
 * @since 0.2.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/components/Base
 */
import React, { Component, PropTypes } from 'react';
import UI from './ui';
import { takeScreenshot } from '../core/take-screenshot';

class BaseComponent extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    console.log('BaseComponent.render:this.props =', this.props);
    const { children } = this.props;
    return (
      <div>
        <div>
          <UI.Button onClick={takeScreenshot}>Screenshot</UI.Button>
        </div>
        {children}
      </div>
    );
  }
}

export default BaseComponent;