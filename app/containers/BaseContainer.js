/// <reference path="../../lib/typedefs/kancolle.d.ts" />
/// <reference path="../../lib/typedefs/dockyard.d.ts" />
/**
 * @overview
 *
 * @todo(@stuf): is this even needed anymore?
 * @since 0.2.0
 * @version 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/containers/base-container
 */
import React, { Component, PropTypes } from 'react';
import Base from '../components/Base';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  gameState: state.gameState,
  core: state.core
});

class BaseContainer extends Component {
  static propTypes = {
    children: PropTypes.any
  };

  renderDevTools = () => {
    if (process.env.NODE_ENV !== 'production') {
      const DevTools = require('./DevTools');
      return <DevTools />;
    }
  };

  render() {
    return (
      <Base>
        <div>
          {this.props.children}
          {this.renderDevTools()}
        </div>
      </Base>
    );
  }
}

export default connect(mapStateToProps)(BaseContainer);
