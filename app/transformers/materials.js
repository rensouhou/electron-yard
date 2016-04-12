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

const materials = ['fuel', 'ammo', 'steel', 'bauxite', 'one', 'two', 'three', 'four'];
const matIntoPair = R.map(({ api_id, api_value }: Material) => [api_id, api_value]);
const fixMatKey = R.map(([i, v]) => [materials[i - 1], v]);

export const parseMaterialArray = R.zipObj(materials);
export const parseMaterialObjects = R.compose(R.fromPairs, fixMatKey, matIntoPair);
