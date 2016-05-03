/**
 * @overview
 *  Represents a single, extendable UI panel
 *
 * @since 0.4.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/components/ui/panel
 */
import React, { PropTypes } from 'react';
import css from './label.scss';

const Panel = props => (
  <div className={css.label}>
    {props.children}
  </div>
);

Panel.propTypes = {
  children: PropTypes.any
};

export default Panel;

export { Panel };
