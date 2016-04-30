/**
 * @overview
 *
 * @since 0.1.0
 * @version 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';
import configureStore from './store/configure-store';

import './assets/css/app.global.css';
import './components/electron';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

const unsub = store.subscribe(() => {
  console.log('store update =>\n\t', store.getState());
});

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
);

