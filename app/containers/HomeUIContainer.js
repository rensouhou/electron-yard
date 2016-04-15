/**
 * @overview
 *
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/containers/home-ui-container
 */
import { connect } from 'react-redux';
import HomeUI from '../components/HomeUI';
import { getFleetShips } from '../selectors/fleet-ships';

function mapStateToProps(state) {
  return {
    game: state.game,
    gameState: state.gameState,
    player: state.player,
    uiStateData: {
      fleetShips: getFleetShips(state)
    }
  };
}

export default connect(
  mapStateToProps
)(HomeUI);
