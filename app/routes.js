/**
 * @overview
 *
 * @since 0.2.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/routes
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
  </Route>
);
