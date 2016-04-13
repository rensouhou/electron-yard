/**
 * @overview
 *
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/components/home-ui
 * @flow
 */
import type { PlayerProfile } from '../types/player-profile';
import React, { Component, PropTypes } from 'react';

export default class HomeUI extends Component {
  static propTypes = {
    game: PropTypes.object,
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
    const inventory = player.inventory;

    console.log('this.props =>', this.props);

    return (
      <div>
        <div>
          <pre>
            {profile.nickname}<br />
            Level: {profile.level},
            Rank: {profile.rank},
            Coins: {profile.coins}<br />
            {JSON.stringify(inventory.materials, null, 2)}
            <br />

            {this.getFleets().map((f, i) => (
              <span>
                Fleet {i + 1}<br />
                HPs: {f.map(s => JSON.stringify(s.hp)).join(', ')}<br />
                <br />
              </span>
            ))}
          </pre>
        </div>
        <div>
        </div>
        <pre>{JSON.stringify(this.props.player, null, 2)}</pre>
      </div>
    );
  }
}
