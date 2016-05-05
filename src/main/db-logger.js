/*eslint no-case-declarations:0,no-new:0*/
/**
 * @overview
 *  Back-end implementation for RDB logging.
 *  Electron + Webpack has issues and I want to log my event data. 🙃
 *
 * @since 0.4.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/core/db-logger
 */
const thinky = require('thinky')({ db: 'dockyard_rdb' });
const type = thinky.type;
const schema = require('./schema/rdb')(thinky, type);
const R = require('ramda');

const electron = require('electron');
const AppEvent = require('../shared/constants');
const ApiEvent = require('../../app/constants/api-events').ApiEvents;
const ipcMain = electron.ipcMain;

console.log('app/core/db-logger#import');

ipcMain.on(AppEvent.REHYDRATE_STORE_REQUEST, (event, arg) => {
  event.sender.send(AppEvent.REHYDRATE_STORE);
});

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
      new schema.CraftingLog(
        Object.assign({},
          payload.consumed.recipe,
          payload.slotItem,
          { flags: payload.flags }
        )).saveAll();
      break;
    case ApiEvent.DESTROY_SHIP:
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
