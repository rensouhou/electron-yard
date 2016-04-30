/**
 * @overview
 *
 * @since 0.4.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/components/game-ui/topbar
 */
import React, { PropTypes } from 'react';
import { Row } from '../ui';
import css from './topbar.scss';

const TopBar = (props) => (
  <Row wrap={false} className={css.topbar}>
    {props.children}
  </Row>
);

TopBar.propTypes = {
  children: PropTypes.any
};

export { TopBar };
