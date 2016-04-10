/**
 * @overview
 *
 * @since 0.2.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/containers/Game
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as GameActions from '../actions/game';
import Game from '../components/Game';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(GameActions, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(Game);
