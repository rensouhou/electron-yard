/**
 * @overview
 *  Kancolle Game Webview
 *
 * @since 0.1.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 */
const webview = document.querySelector('#game');
const uiView = document.querySelector('#ui');
let firstLoad = true;
let gameUrl;
let debuggerAttached = false;

const config = {
  rootEventName: 'kancolledata',
  rootEventNode: 'body',
  apiDataPrefix: 'svdata=',
  pathRegex: /.*\/kcsapi/
};

webview.addEventListener('dom-ready', (...args) => {
  console.log('Webview ready; ', args);

  const webContents = webview.getWebContents();
  const webSession = webContents.session;

  // @todo(@stuf): refactor the debugger logic to be more consistent
  if (!debuggerAttached) {
    try {
      webContents.debugger.attach('1.1');
      debuggerAttached = true;
    }
    catch (err) {
      console.log('Debugger attach failed : ', err);
    }

    webContents.debugger.on('detach', (event, reason) => {
      console.log(`Debugger detached due to: ${reason}`);
    });

    // @todo(@stuf): extract into its own handler
    webContents.debugger.on('message', (event, method, params) => {
      // @todo(@stuf): This does not work on all requests for some reason
      if (method === 'Network.responseReceived') {
        webContents.debugger.sendCommand('Network.getResponseBody', {
          requestId: params.requestId
        }, (err, result) => {
          if (!err.message && config.pathRegex.test(params.response.url)) {
            const _path = params.response.url.replace(config.pathRegex, '');
            const _data = result.body.substring(config.apiDataPrefix.length);

            let jsonData = null;
            try {
              jsonData = JSON.parse(_data);
            }
            catch (e) {
              console.error('Error parsing JSON');
            }

            console.groupCollapsed(`Network.getResponseBody; ${_path}`);
            console.log('event\t=>', JSON.parse(JSON.stringify(event)));
            console.log('params\t=>', JSON.parse(JSON.stringify(params)));
            console.log('result\t=>', jsonData);
            console.groupEnd();
          }
          else if (config.pathRegex.test(params.response.url)) {
            console.group('Unexpected data');
            if (err) console.error('Error\t=>', err);
            console.log('URL\t\t=>', params.response.url.replace(config.pathRegex, ''));
            console.log('event\t=>', JSON.parse(JSON.stringify(event)));
            console.log('params\t=>', JSON.parse(JSON.stringify(params)));
            console.groupEnd();
          }
        });
      }
    });

    webContents.debugger.sendCommand('Network.enable');
  }

  // @todo(@stuf): extract into a separate handler
  webSession.webRequest.onCompleted((details) => {
    if (/kcs\/mainD2/.test(details.url) && firstLoad) {
      console.log('Found game SWF: ', details.url);
      gameUrl = details.url;
      firstLoad = false;

      webview.loadURL(gameUrl);
    }
  });

  webContents.executeJavaScript([
    'document.cookie = "cklg=welcome;expires=Sun, 09 Feb 2019 09:00:09 GMT;domain=.dmm.com;path=/";',
    'document.cookie = "cklg=welcome;expires=Sun, 09 Feb 2019 09:00:09 GMT;domain=.dmm.com;path=/netgame/";',
    'document.cookie = "cklg=welcome;expires=Sun, 09 Feb 2019 09:00:09 GMT;domain=.dmm.com;path=/netgame_s/";',
    'document.cookie = "ckcy=1;expires=Sun, 09 Feb 2019 09:00:09 GMT;domain=.dmm.com;path=/";',
    'document.cookie = "ckcy=1;expires=Sun, 09 Feb 2019 09:00:09 GMT;domain=.dmm.com;path=/netgame/";',
    'document.cookie = "ckcy=1;expires=Sun, 09 Feb 2019 09:00:09 GMT;domain=.dmm.com;path=/netgame_s/";'
  ].join('\n'));
});

uiView.addEventListener('console-message', (e) => {
  console.log('Guest page logged a message:', e);
});
