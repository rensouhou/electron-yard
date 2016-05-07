/* eslint strict: 0,no-console:0,global-require:0 */
/**
 * @overview
 *  Main electron entry point
 *
 * @since 0.1.0
 * @version 0.4.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module main
 */
import { app, BrowserWindow, Menu, crashReporter, shell } from 'electron';
import path from 'path';

process.env.NODE_ENV = process.env.NODE_ENV || 'production';

crashReporter.start({
  companyName: 'rensouhou',
  submitURL: 'http://heatenin.gs:8643',
  productName: 'Dockyard'
});

if (process.env.NODE_ENV === 'development') {
  require('electron-debug')();
}

let mainWindow = null;
let ppapiFlashPath = null;

if (process.platform === 'darwin') {
  ppapiFlashPath = path.join(__dirname, 'lib', 'PepperFlashPlayer.plugin');
}

app.commandLine.appendSwitch('remote-debugging-port', '8642');
app.commandLine.appendSwitch('ppapi-flash-path', ppapiFlashPath);
app.commandLine.appendSwitch('ppapi-flash-version', '21.0.0.197');

function createWindow() {
  const windowOpts = {
    width: 1200,
    height: 1100,
    webPreferences: {
      plugins: true
    }
  };

  mainWindow = new BrowserWindow(windowOpts);
  mainWindow.loadURL(`file://${__dirname}/app/app.html`);

  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.show();
    mainWindow.focus();
  });

  mainWindow.on('closed', () => {
    mainWindow.removeAllListeners();
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (mainWindow == null) {
    createWindow();
  }
});

// Start timer listeners
require('./src/main/timers');

if (process.env.NODE_ENV !== 'production') {
  require('./src/main/db-logger');
}
