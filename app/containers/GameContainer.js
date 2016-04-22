/// <reference path="../../lib/typedefs/kancolle.d.ts" />
/// <reference path="../../lib/typedefs/dockyard.d.ts" />
/**
 * @overview
 *
 * @since 0.2.0
 * @version 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/containers/game-container
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createTransformerActions, createGameActions } from '../actions/game';
import * as coreActions from '../actions/core';
import Game from '../components/Game';

const mapDispatchToProps = dispatch => ({
  transformerActions: bindActionCreators(createTransformerActions(), dispatch),
  game: bindActionCreators(createGameActions(), dispatch),
  actions: bindActionCreators({ ...coreActions }, dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(Game);
