/**
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/components/home-ui
 * @flow
 */
import type { PlayerProfile } from '../types/player-profile';
import React, { Component, PropTypes } from 'react';
import R from 'ramda';

export default class HomeUI extends Component {
  static propTypes = {
    game: PropTypes.object,
    gameState: PropTypes.string,
    player: PropTypes.object.isRequired,
    actions: PropTypes.object,
    uiStateData: PropTypes.object
  };

  getFleets = () => {
    const uiStateData = this.props.uiStateData || {};
    return uiStateData.fleetShips;
  };

  render() {
    const { player } = this.props;
    const profile:PlayerProfile = player.profile;

    return (
      <div>
        <div>
          <h3>Game state: {this.props.gameState}</h3>
          <pre>
            {profile.nickname}<br />
            Level: {profile.level},
            Rank: {profile.rank},
            Coins: {profile.coins}<br />
            {JSON.stringify(player.materials, null, 2)}
          </pre>
        </div>
        <div>
        </div>
        <pre>{JSON.stringify(this.props.player, null, 2)}</pre>
      </div>
    );
  }
}
