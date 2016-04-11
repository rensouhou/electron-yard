/* eslint no-param-reassign: 0 */
/**
 * @overview
 *
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/transformers/materials
 * @see {@link __PROTO.AppState}
 * @flow
 */

type Material = {
  api_id: number,
  api_member_id: number,
  api_value: number
};

const materials = [
  -1,
  'fuel', 'ammo', 'steel', 'bauxite'
];

// @todo(@stuf): fix me up
export default function (d:Array<Material>) {
  return d.reduce((acc, m, i) => {
    console.log(`${i} =>`, m);
    acc[materials[i]] = m.api_value;
    return acc;
  }, {});
}
