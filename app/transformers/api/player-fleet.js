/**
 * @overview
 *
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/transformers/api/player-fleet
 */
import { notEmpty, getArrayOrDefault } from '../primitive';

/**
 * @param {KCSApi.PlayerFleet} d
 * @returns {Dockyard.PlayerData.Fleet}
 */
const playerFleet = (d) => ({
  flagship: d.api_flagship,
  id: d.api_id,
  memberId: d.api_member_id,
  mission: d.api_mission,
  name: d.api_name,
  ships: getArrayOrDefault(d.api_ship).filter(notEmpty),
  $_unknown: {
    nameId: d.api_name_id
  },
  $_finalized: false,
  $_wip: true
});

export { playerFleet };
