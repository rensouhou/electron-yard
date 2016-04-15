/**
 * @overview
 *
 * @since 0.2.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/reducers
 */
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import core from './app-core';
import game from './game';
import gameState from './game-state';
import player from './player';

const rootReducer = combineReducers({ core, game, gameState, player, routing });

export default rootReducer;
