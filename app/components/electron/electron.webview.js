/* eslint no-return-assign: 0,no-param-reassign: 0, react/no-did-mount-set-state: 0 */
/**
 * @overview
 *
 * @since 0.2.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/components/electron/electron-webview
 */

import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import camelcase from 'camelcase';

const EVENTS = [
  'load-commit',
  'did-finish-load',
  'did-fail-load',
  'did-frame-finish-load',
  'did-start-loading',
  'did-stop-loading',
  'did-get-response-details',
  'did-get-redirect-request',
  'dom-ready',
  'page-title-set',
  'page-favicon-updated',
  'enter-html-full-screen',
  'leave-html-full-screen',
  'console-message',
  'new-window',
  'close',
  'ipc-message',
  'crashed',
  'gpu-crashed',
  'plugin-crashed',
  'destroyed'
];

export default class WebView extends Component {
  static propTypes = {
    autosize: PropTypes.bool,
    disablewebsecurity: PropTypes.bool,
    httpreferrer: PropTypes.string,
    nodeintegration: PropTypes.bool,
    plugins: PropTypes.bool,
    preload: PropTypes.string,
    src: PropTypes.string,
    useragent: PropTypes.string
  };

  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      webview: null
    };
  }

  componentDidMount() {
    const node = findDOMNode(this);

    this._bindEvents(node);
    this._assignMethods(node);
    this.setState({ loaded: true, webview: node });
  }

  _bindEvents = (node) => {
    EVENTS.forEach(event => node.addEventListener(event, this.props[camelcase(event)]));
  };

  _assignMethods = (node) => {
    node.addEventListener('dom-ready', () => {
      Object.getOwnPropertyNames(node)
        .filter(prop => typeof prop === 'function')
        .forEach(method => this[method] = node[method]);
    });
  };

  render() {
    return (<webview {...this.props}></webview>);
  }
}

EVENTS.reduce((propTypes, event) => propTypes[camelcase(event)] = React.PropTypes.func, WebView.propTypes);
