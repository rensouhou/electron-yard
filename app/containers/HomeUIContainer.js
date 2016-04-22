/// <reference path="../../lib/typedefs/kancolle.d.ts" />
/// <reference path="../../lib/typedefs/dockyard.d.ts" />
/**
 * @overview
 *
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/containers/home-ui-container
 */
import R from 'ramda';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HomeUI from '../components/HomeUI';
import { getFleetShips, combineShips } from '../selectors/fleet-ships';
import * as coreActions from '../actions/core';

const mapStateToProps = (state) => ({
  game: state.game,
  gameState: state.gameState,
  player: state.player,
  selectors: {
    fleetShips: getFleetShips(state),
    combinedShips: combineShips(state)
  }
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Object.assign({}, coreActions), dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeUI);
