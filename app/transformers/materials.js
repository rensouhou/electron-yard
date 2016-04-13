/* eslint no-param-reassign: 0, camelcase: 0 */
/**
 * @overview
 *
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/transformers/materials
 * @see {@link __PROTO.AppState}
 * @flow
 */
import type { Material } from '../types/kcsapi';
import R from 'ramda';

/** @private */
const materials = [
  'fuel', 'ammo', 'steel', 'bauxite', 'instantConstruction', 'instantRepair', 'developmentMaterials',
  'improvementMaterials'
];

/** @private */
const matIntoPair = R.map(({ api_id, api_value }:Material):[number, number] => [api_id, api_value]);

/** @private */
const fixMatKey = R.map(([i, v]:[number, number]):[string, number] => [materials[i - 1], v]);

/**
 * @type {Function}
 * @example
 * let mats = [100, 100, 200, 50];
 * let matObj = parseMaterialArray(mats);
 * console.log(matObj); // => { fuel: 100, ammo: 100, steel: 200, bauxite: 50 }
 */
export const parseMaterialArray = (arr) => R.zipObj(materials)(arr || []);

/**
 * @type {Function}
 */
export const parseMaterialObjects = R.compose(R.fromPairs, fixMatKey, matIntoPair);
