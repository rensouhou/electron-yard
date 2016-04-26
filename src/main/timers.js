/// <reference path="../../lib/typedefs/kancolle.d.ts" />
/// <reference path="../../lib/typedefs/dockyard.d.ts" />
/**
 * @overview
 *  Handles timers in the background
 *
 * @since 0.4.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module src/main/timers
 * @flow
 */
const electron = require('electron');
const AppEvent = require('../shared/constants');
const { ipcMain } = electron;

// Timer store
const timers = {};

// Timer creation
const createTimer = (arg, event) => {
  console.log('Create timer;', arg);

  if (timers[arg.id]) {
    return; // already have one, get out (maybe clean it up and replace?)
            // too lazy
  }

  const reply = Object.assign({}, arg);
  const timeDiff = arg.targetTime - (+new Date());

  if (timeDiff <= 0) {
    reply.error = new Error('Timer needs to be in the future');
    event.sender.send(AppEvent.TIMER_ERROR, reply);
    return reply;
  }

  console.log(`timeDiff => ${timeDiff}`);

  timers[arg.id] = setTimeout(() => {
    console.log(`Timer with id ${arg.id} done`);
    event.sender.send(AppEvent.TIMER_DONE, reply);
    delete timers[arg.id];
  }, timeDiff);

  return reply;
};

// Timer event IPC listener
ipcMain.on(AppEvent.TIMER_START, (event, arg) => {
  console.log(`ipcMain received ${AppEvent.TIMER_START}`);
  const reply = createTimer(arg, event);
  event.sender.send(AppEvent.TIMER_STARTED, Object.assign({}, reply));
});
