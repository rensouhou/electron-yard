/**
 * @overview
 *
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/containers/DockyardBaseContainer
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as coreActions from '../actions/core';
import DockyardBase from '../components/DockyardBase';

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Object.assign({}, coreActions), dispatch)
});

const mapStateToProps = state => ({
  core: state.core,
  gameState: state.gameState
});

export default connect(mapStateToProps, mapDispatchToProps)(DockyardBase);
