/**
 * @overview
 *
 * @since 0.0.1
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module
 *
 * @todo Proxy for intercepting traffic
 */
'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

app.commandLine.appendSwitch('remote-debugging-port', '8609');
app.commandLine.appendSwitch('host-rules', 'MAP *.dmm.com localhost:8420');

app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function () {
  mainWindow = new BrowserWindow({ width: 800, height: 600 });
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  var ses = mainWindow.webContents.session;

  ses.webRequest.onCompleted(function (listener) {
    console.log(listener);
  });

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
});
