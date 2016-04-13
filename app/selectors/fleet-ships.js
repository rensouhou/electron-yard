/**
 * @overview
 *
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/selectors/fleet-ships
 */
import { createSelector } from 'reselect';

const getFleets = (state) => state.player.fleets;
const getShips = (state) => state.player.inventory.ships;

export const getFleetShips = createSelector(
  [getFleets, getShips],
  (fleets, ships) => {
    console.log('getFleetShips');

    return fleets.map(fs => {
      console.log('fs.ships =>', fs.ships);
      return fs.ships.map(s => {
        console.log('s =>', s);
        return ships.find(ps => ps.id === s);
      });
    });
  });
