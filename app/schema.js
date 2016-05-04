/*eslint no-param-reassign:0*/
/**
 * @overview
 *
 * @since 0.4.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/schema
 * @todo(@stuf): clean this up
 */
import { normalize, Schema, arrayOf } from 'normalizr';
import R from 'ramda';
import deepAssign from 'deep-assign';

const ship = new Schema('ships', { idAttribute: 'shipId' });
const slotItem = new Schema('slotItems', { idAttribute: 'slotItemId' });
const fleet = new Schema('fleets', { idAttribute: 'id' });

function* entries(obj) {
  let key = null;
  for (key of Object.keys(obj)) {
    yield([key, obj[key]]);
  }
}

export const mergeIntoEntityFn = (entityA, entityB, entityKey) => {
  let key = null;
  let value = null;
  console.log('mergeIntoEntity =>', ...rest);
  for ([key, value] of entries(entityB)) {
    if (!entityB.hasOwnProperty(key)) {
      continue;
    }

    if (!entityA.hasOwnProperty(key) || R.equals(entityA[key], entityB[key])) {
      entityA[key] = entityB[key];
      continue;
    }

    if (R.is(Object, entityA[key]) && R.is(Object, entityB[key])) {
      deepAssign(entityA[key], entityB[key]);
      continue;
    }

    console.warn('entityA and entityB are not equal', { entityA, entityB });
  }
};

ship.define({
  slotItems: arrayOf(slotItem)
});

fleet.define({
  ships: arrayOf(ship)
});

export { ship, slotItem, fleet };
