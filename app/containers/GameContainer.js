/**
 * @overview
 *
 * @since 0.2.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/containers/Game
 */
import { connect } from 'react-redux';
import { registerGameView } from '../actions/app-core';
import Game from '../components/Game';

export default connect(
  null,
  { registerGameView }
)(Game);
