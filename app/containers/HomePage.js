/**
 * @overview
 *
 * @since 0.2.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/containers/HomePage
 */
import React, { Component } from 'react';
import Home from '../components/Home';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="ui buttons">
          <button className="ui basic blue button">
            <i className="camera retro icon" />Screenshot
          </button>
          <button className="ui basic blue button">
            <i className="refresh icon" /> Reload
          </button>
        </div>
        <Home />
      </div>
    );
  }
}
