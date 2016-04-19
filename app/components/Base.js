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
import { Button } from './ui';
import styles from './Base.scss';

class BaseComponent extends Component {
  static propTypes = {
    children: PropTypes.any,
    takeScreenshot: PropTypes.func,
    core: PropTypes.object,
    actions: PropTypes.object
  };

  handleScreenshotClick = (handler, webview) => {
    console.log('handleScreenshotClick() =>', handler, webview);
    if (!(handler || webview)) return;

    handler(webview);

    return (e) => {
      e.preventDefault();
    };
  };

  render() {
    console.log('BaseComponent.render:this.props =', this.props);
    const { children } = this.props;
    const actions = this.props.actions || {};
    const core = this.props.core || {};
    const clickHandler = this.handleScreenshotClick(actions.takeScreenshot, core.webview);
    return (
      <DockyardBaseContainer>
        {children}
      </DockyardBaseContainer>
    );
  }
}

export default BaseComponent;
