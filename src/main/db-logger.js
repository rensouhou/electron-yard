/*eslint no-case-declarations: 0*/
/**
 * @overview
 *  Back-end implementation for RDB logging.
 *  Electron + Webpack has issues and I want to log my event data. 🙃
 *
 * @since 0.4.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/core/db-logger
 */
require('babel-register');
const thinky = require('thinky')({ db: 'dockyard_rdb' });
const type = thinky.type;
const schema = require('./schema/rdb')(thinky, type);
const R = require('ramda');

const electron = require('electron');
const AppEvent = require('../shared/constants');
const ApiEvent = require('../../app/constants/api-events').ApiEvents;
const ipcMain = electron.ipcMain;

ipcMain.on(AppEvent.RDB_LOG_EVENT, (event, arg) => {
  const t = arg.action.type;
  const payload = arg.action.payload;
  const state = arg.state;

  switch (t) {
    case ApiEvent.GET_BASE_DATA || ApiEvent.RESUPPLY_SHIP || ApiEvent.GET_MATERIAL:
      console.log('Logging material state');
      new schema.MaterialState(payload.materials).saveAll();
      break;
    case ApiEvent.CRAFT_ITEM:
      new schema.MaterialState(payload.materials).saveAll();
      break;
    case ApiEvent.GET_CONSTRUCTION_DOCKS:
      const flags = R.path(['crafting', 'flags'], state);
      if (flags && flags.shipCrafted) {
        new schema.CraftingLog(
          Object.assign({}, payload.recipe, {
            flags: payload.flags,
            id: payload.slotItem.id,
            entityId: payload.slotItem.slotItemId
          })
        ).saveAll();
      }

      break;
    default:
      console.log('Unhandled action of type %s', t);
      break;
  }
});
