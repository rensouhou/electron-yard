/**
 * @overview
 *
 * @since 0.0.1
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module
 */
'use strict';

const path = require('path');
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow = null;
let ppapi_flash_path = null;

// Specify flash path.
// On Windows, it might be /path/to/pepflashplayer.dll
// On OS X, /path/to/PepperFlashPlayer.plugin
// On Linux, /path/to/libpepflashplayer.so
if (process.platform == 'darwin') {
  ppapi_flash_path = path.join(__dirname, 'PepperFlashPlayer.plugin');
}

app.commandLine.appendSwitch('remote-debugging-port', '8609');

app.commandLine.appendSwitch('ppapi-flash-path', ppapi_flash_path);
app.commandLine.appendSwitch('ppapi-flash-version', '21.0.0.197');

function createWindow() {
  const windowOpts = {
    width: 1200,
    height: 800,
    'web-preferences': { 'plugins': true }
  };

  mainWindow = new BrowserWindow(windowOpts);
  mainWindow.loadURL('file://' + __dirname + '/src/index.html');

  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

