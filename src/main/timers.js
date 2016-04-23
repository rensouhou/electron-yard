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
import electron from 'electron';
import AppEvent from '../shared/constants';
const { ipcMain } = electron;

// Flow typedefs
type TimerArgs = {
  id: any,
  targetTime: number
};

type TimerReply = {
  id: any,
  targetTime: number,
  error?: Error
};

type TimerObj = {
  [id:number]: TimerArgs
}

// Timer store
const timers:TimerObj = {};

// Timer creation
const createTimer = (arg:TimerArgs, event:Event):void => {
  if (timers[arg.id]) {
    return; // already have one, get out (maybe clean it up and replace?)
            // too lazy
  }

  const reply:TimerReply = { ...arg };
  const timeDiff = arg.targetTime - (+new Date());

  if (timeDiff <= 0) {
    reply.error = new Error('Timer needs to be in the future');
    event.sender.send(AppEvent.TIMER_ERROR, reply);
    return;
  }

  timers[arg.id] = setTimeout(() => event.sender.send(AppEvent.TIMER_DONE, reply), timeDiff);
};

// Timer event IPC listener
ipcMain.on(AppEvent.TIMER_START, (event:Event, arg:TimerArgs) => {
  createTimer(arg, event);
  event.sender.send(AppEvent.TIMER_STARTED, { ...arg });
});
