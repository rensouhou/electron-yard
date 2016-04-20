/**
 * @overview
 *
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/components/DockyardBase
 */
import React, { Component, PropTypes } from 'react';
import styles from './DockyardBase.scss';
import { Button } from './ui';

export default class DockyardBase extends Component {
  static propTypes = {
    children: PropTypes.any,
    core: PropTypes.object,
    gameState: PropTypes.string,
    actions: PropTypes.object
  };

  handleScreenshotClick = (handler, webview) => {
    if (!(typeof handler === 'function' && !!webview)) return;
    return function handler$handleScreenshotClick(e) {
      e.preventDefault();
      handler(webview);
    };
  };

  render() {
    const { children, core, actions } = this.props;
    const handler = this.handleScreenshotClick(
      (actions || {}).takeScreenshot,
      (core || {}).webview);

    return (
      <div className={styles.base}>
        <div className={styles.topBar}>
          <Button onClick={handler}>Screenshot</Button>
        </div>
        {children}
      </div>
    );
  }
}
