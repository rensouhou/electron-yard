/// <reference path="../../../lib/typedefs/kancolle.d.ts" />
/// <reference path="../../../lib/typedefs/dockyard.d.ts" />
/**
 * @overview
 *  Handler for `INITIALIZE_GAME` event
 *
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/transformers/kcsapi/initialize-game
 * @flow
 */
import type { ApiRequest, ApiRequestResult } from '../../types/api';
import R from 'ramda';
import { baseShip } from '../api/base-ship';
import { baseShipGraphic } from '../api/base-ship-graphic';
import { baseShipType } from '../api/base-ship-types';
import { baseSlotItem } from '../api/base-slotitem';
import { normalize, Schema, arrayOf } from 'normalizr';
// import * as Schema from '../../schema';

/**
 * @event INITIALIZE_GAME
 * @param {__PROTO.ApiRequest} r
 */
export default function (r:ApiRequest):ApiRequestResult {
  const {
          api_mst_ship,
          api_mst_shipgraph,
          api_mst_shipupgrade,
          api_mst_slotitem,
          api_msg_slotitem_equiptype,
          api_mst_equip_exslot,
          api_mst_stype,
          api_mst_furniture,
          api_mst_furnituregraph,
          api_mst_useitem,
          api_mst_payitem,
          api_mst_item_shop,
          api_mst_maparea,
          api_mst_mapinfo,
          api_mst_mapbgm,
          api_mst_mapcell,
          api_mst_mission,
          api_mst_const,
          api_mst_bgm,
        } = r.body;

  const response = {
    ships: R.map(baseShip, r.body.api_mst_ship)
  };

  const baseShip_Schema = new Schema('ships', { idAttribute: 'shipId' });

  const result = normalize(response, {
    ships: baseShip_Schema
  });

  console.log('normalized =>', result);

  return {
    normalized: result,
    ships: api_mst_ship.map(baseShip),
    shipGraphics: api_mst_shipgraph.map(baseShipGraphic),
    shipTypes: api_mst_stype.map(baseShipType),
    slotItems: api_mst_slotitem.map(baseSlotItem)
  };
}
