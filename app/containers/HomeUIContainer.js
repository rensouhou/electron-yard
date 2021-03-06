/// <reference path="../../lib/typedefs/kancolle.d.ts" />
/// <reference path="../../lib/typedefs/dockyard.d.ts" />
/**
 * @overview
 *
 * @since 0.3.0
 * @version 0.4.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/containers/home-ui-container
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HomeUI from '../components/HomeUI';
import { combineShips, combineSlotItems, combined } from '../selectors/ships';
import * as coreActions from '../actions/core';
import { gameEntities } from '../selectors/game-entities';

const mapStateToProps = (state) => ({
  gameState: state.gameState,
  game: state.game,
  player: {
    ...state.player,
    ships: combineShips(state),
    slotItems: combineSlotItems(state)
  },
  models: combined(state),
  gameEntities: gameEntities(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...coreActions }, dispatch)
});

//export default connect(mapStateToProps, mapDispatchToProps)(HomeUI);
export default connect(mapStateToProps)(HomeUI);
