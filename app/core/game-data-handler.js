/**
 * @overview
 *
 * @since 0.1.0
 * @author Stefan Rimaila
 * @module app/core/game-data-handler
 */
import T from 'immutable';
import config from '../config';

let incompleteRequests = T.Map();

export default class GameDataHandler {
  constructor(webContents) {
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

            webContents.debugger.sendCommand('Network.getResponseBody', { requestId },
              (err, result) => {
                console.log(`${requestId}: Network.getResponseBody done = ${path}`);
                let jsonBody;

                try {
                  /** @type {KCSApi.Response} */
                  const apiResponse = JSON.parse(result.body.replace(config.apiDataPrefix, ''));
                  jsonBody = apiResponse.api_data;
                }
                catch (e) {
                  console.error(e);
                }

                console.log(`${requestId}:\t%O`, JSON.parse(JSON.stringify({ path, response, jsonBody })));
              });
          }
          break;

        default:
          break;
      }
    };
  }
}

