/**
 * @overview
 *
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/transformers/fleet
 */

/**
 * @param {KCSApi.PlayerFleet} d
 * @returns {Dockyard.PlayerData.Fleet}
 */
const fleet = (d) => ({
  flagship: d.api_flagship,
  id: d.api_id,
  memberId: d.api_member_id,
  mission: d.api_mission,
  name: d.api_name,
  ships: d.api_ship,
  $_unknown: {
    nameId: d.api_name_id
  }
});

export default fleet;
