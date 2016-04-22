/// <reference path="../../lib/typedefs/kancolle.d.ts" />
/// <reference path="../../lib/typedefs/dockyard.d.ts" />
/**
 * @overview
 *
 * @since 0.2.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/containers/home-page
 */
import React, { Component, PropTypes } from 'react';
import Home from '../components/Home';
import { connect } from 'react-redux';

class HomeContainer extends Component {
  render() {
    return (
      <Home />
    );
  }
}

const mapStateToProps = (state) => ({
  coreApp: {
    gameWebView: state.core.gameWebView
  }
});

export default connect(
  mapStateToProps,
  null
)(HomeContainer);
