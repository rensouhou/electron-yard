/**
 * @overview
 *  Kancolle Game Webview entry point
 *
 * @since 0.1.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/game
 */
const fs = require('fs');
const remote = require('electron').remote;

import GameDataHandler from './core/game-data-handler';
import config from './config';

const curWindow = remote.getCurrentWindow();
curWindow.removeAllListeners();

const gameView = document.querySelector('#game');
const uiView = document.querySelector('#ui');

let initialLoad = true;
let firstGameLoad = true;
let gameUrl;
let debuggerAttached = false;

gameView.addEventListener('dom-ready', () => {
  const webContents = gameView.getWebContents();
  const webSession = webContents.session;

  gameView.addEventListener('close', () => {
    webContents.debugger.sendCommand('Network.disable');
  });

  // @todo(stuf): refactor the debugger logic to be more consistent
  if (!debuggerAttached) {
    try {
      webContents.debugger.attach('1.1');
      debuggerAttached = true;
    }
    catch (err) {
      console.log('Debugger attach failed : ', err);
    }

    webContents.debugger.on('detach', () => {
      debuggerAttached = false;
    });

    webContents.debugger.on('message', new GameDataHandler(webContents));
    webContents.debugger.sendCommand('Network.enable');

    webSession.webRequest.onBeforeRequest((details, callback) => {
      const cancel = config.gameSwfPrefix.test(details.url) && firstGameLoad;
      callback({ cancel });

      if (cancel) {
        console.log(`Found game SWF: ${details.url}`);
        gameUrl = details.url;
        firstGameLoad = false;
        webContents.loadURL(gameUrl);
      }
    });
  }

  webContents.executeJavaScript([
    'document.cookie = "cklg=welcome;expires=Sun, 09 Feb 2019 09:00:09 GMT;domain=.dmm.com;path=/";',
    'document.cookie = "cklg=welcome;expires=Sun, 09 Feb 2019 09:00:09 GMT;domain=.dmm.com;path=/netgame/";',
    'document.cookie = "cklg=welcome;expires=Sun, 09 Feb 2019 09:00:09 GMT;domain=.dmm.com;path=/netgame_s/";',
    'document.cookie = "ckcy=1;expires=Sun, 09 Feb 2019 09:00:09 GMT;domain=.dmm.com;path=/";',
    'document.cookie = "ckcy=1;expires=Sun, 09 Feb 2019 09:00:09 GMT;domain=.dmm.com;path=/netgame/";',
    'document.cookie = "ckcy=1;expires=Sun, 09 Feb 2019 09:00:09 GMT;domain=.dmm.com;path=/netgame_s/";'
  ].join('\n'));
});

// @todo(stuf): take care of different DPI screenshots?
document.getElementById('capture').addEventListener('click', (e) => {
  e.preventDefault();
  const gameViewRect = gameView.getBoundingClientRect();
  remote.getCurrentWindow().capturePage({
    x: gameViewRect.left,
    y: gameViewRect.top,
    width: gameViewRect.width,
    height: gameViewRect.height
  }, (image) => {
    const filename = `/Users/stuf/electron_${+(new Date())}.png`;
    fs.writeFile(filename, image.toPng(), () => {
      console.log(`Screenshot saved as: ${filename}`);
    });
  });
});

