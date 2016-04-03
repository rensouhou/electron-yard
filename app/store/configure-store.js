/**
 * @overview
 *
 * @since 0.2.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/store/configure-store
 */
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configure-store.production.js');
}
else {
  module.exports = require('./configure-store.development.js');
}