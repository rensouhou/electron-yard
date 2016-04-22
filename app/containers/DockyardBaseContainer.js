/// <reference path="../../lib/typedefs/kancolle.d.ts" />
/// <reference path="../../lib/typedefs/dockyard.d.ts" />
/**
 * @overview
 *
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/containers/dockyard-base-container
 */
import { connect } from 'react-redux';
import DockyardBase from '../components/DockyardBase';

const mapStateToProps = state => ({
  core: state.core,
  gameState: state.gameState
});

export default connect(mapStateToProps)(DockyardBase);
