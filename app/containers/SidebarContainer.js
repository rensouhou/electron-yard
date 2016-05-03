/**
 * @overview
 *
 * @since 0.4.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/containers/sidebar-container
 * @flow
 * @todo(@stuf): use redux-rx?
 */
import { connect } from 'react-redux';
import { bindActionCreators, observableFromStore } from 'redux-rx';
import Sidebar from '../components/Sidebar';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect()(Sidebar);
