/**
 * @overview
 *
 * @since 0.2.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/containers/Base
 */
import React, { Component, PropTypes } from 'react';
import Base from '../components/Base';
import * as InterfaceActions from '../actions/interface';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(InterfaceActions, dispatch);
}

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
    const { children } = this.props;
    return (
      <Base>
        <div>
          {children}
          {this.renderDevTools()}
        </div>
      </Base>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(BaseContainer);
