/**
 * @overview
 *  Game data handler for {@see KCSApi} traffic
 *
 * @since 0.1.0
 * @author Stefan Rimaila
 * @module app/core/game-data-handler
 */
import T from 'immutable';
import config from '../config';
import invariant from 'invariant';

let incompleteRequests = T.Map();

let firstGameLoad = true;
let gameUrl;
let debuggerAttached = false;

export function handleGameView(e) {
  console.log('handleGameView:e =>', e);
  const view = e.target;
  const wc = view.getWebContents();
  const ws = wc.session;

  invariant(view, 'A webview reference is required.');
  invariant(wc, 'A webcontents reference is required.');
  invariant(ws, 'A websession reference is required.');

  view.addEventListener('close', () => {
    wc.debugger.sendCommand('Network.disable');
  });

  if (!debuggerAttached) {
    try {
      wc.debugger.attach('1.1');
      debuggerAttached = true;
    }
    catch (err) {
      console.log('Debugger attach failed : ', err);
    }

    wc.debugger.on('detach', () => {
      debuggerAttached = false;
    });

    wc.debugger.on('message', new GameNetworkDataHandler(wc));
    wc.debugger.sendCommand('Network.enable');

    ws.webRequest.onBeforeRequest((details, callback) => {
      const cancel = config.gameSwfPrefix.test(details.url) && firstGameLoad;
      callback({ cancel });

      if (cancel) {
        console.log(`Found game SWF: ${details.url}`);
        gameUrl = details.url;
        firstGameLoad = false;
        wc.loadURL(gameUrl);
      }
    });

    wc.executeJavaScript([
      'document.cookie = "cklg=welcome;expires=Sun, 09 Feb 2019 09:00:09 GMT;domain=.dmm.com;path=/";',
      'document.cookie = "cklg=welcome;expires=Sun, 09 Feb 2019 09:00:09 GMT;domain=.dmm.com;path=/netgame/";',
      'document.cookie = "cklg=welcome;expires=Sun, 09 Feb 2019 09:00:09 GMT;domain=.dmm.com;path=/netgame_s/";',
      'document.cookie = "ckcy=1;expires=Sun, 09 Feb 2019 09:00:09 GMT;domain=.dmm.com;path=/";',
      'document.cookie = "ckcy=1;expires=Sun, 09 Feb 2019 09:00:09 GMT;domain=.dmm.com;path=/netgame/";',
      'document.cookie = "ckcy=1;expires=Sun, 09 Feb 2019 09:00:09 GMT;domain=.dmm.com;path=/netgame_s/";'
    ].join('\n'));
  }

  return this;
}

export default class GameNetworkDataHandler {
  constructor(wc) {
    return (event, method, params) => {
      const requestId = params.requestId;

      switch (method) {
        case 'Network.responseReceived':
          if (config.pathPrefix.test(params.response.url)) {
            incompleteRequests = incompleteRequests.set(requestId, {
              response: params.response,
              path: params.response.url.replace(config.pathPrefix, '')
            });
          }
          break;

        case 'Network.loadingFinished':
          if (incompleteRequests.has(requestId)) {
            const { path, response } = incompleteRequests.get(requestId);

            incompleteRequests = incompleteRequests.delete(requestId);

            wc.debugger.sendCommand('Network.getResponseBody', { requestId },
              (err, result) => {
                let jsonBody;

                try {
                  /** @type {KCSApi.Response} */
                  const apiResponse = JSON.parse(result.body.replace(config.apiDataPrefix, ''));
                  jsonBody = apiResponse.api_data;
                }
                catch (e) {
                  console.error(e);
                }

                console.log(`${requestId}: Network.getResponseBody done = ${path}\t%O`, JSON.parse(JSON.stringify({
                  path,
                  response,
                  jsonBody
                })));
              });
          }
          break;

        default:
          break;
      }
    };
  }
}

