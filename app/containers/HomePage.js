/**
 * @overview
 *
 * @since 0.2.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/containers/HomePage
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
    gameWebView: state.coreApp.gameWebView
  }
});

export default connect(
  mapStateToProps,
  null
)(HomeContainer);
