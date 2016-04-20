/**
 * @overview
 *
 * @since 0.2.0
 * @version 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/components/Base
 */
import React, { Component, PropTypes } from 'react';
import DockyardBaseContainer from '../containers/DockyardBaseContainer';

class BaseComponent extends Component {
  static propTypes = {
    children: PropTypes.any,
    takeScreenshot: PropTypes.func,
    core: PropTypes.object,
    actions: PropTypes.object
  };

  render() {
    const { children } = this.props;
    return (
      <DockyardBaseContainer>
        {children}
      </DockyardBaseContainer>
    );
  }
}

export default BaseComponent;
