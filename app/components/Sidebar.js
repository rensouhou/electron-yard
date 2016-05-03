/**
 * @overview
 *
 * @since 0.4.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/components/sidebar
 * @flow
 */
import React, { Component, PropTypes } from 'react';
import css from './Sidebar.scss';

class Sidebar extends Component {
  static propTypes = {
    children: PropTypes.any
  };
  render() {
    return (
      <div className={css.sidebarComponent}>
        {this.props.children}
      </div>
    );
  }
}

export default Sidebar;
