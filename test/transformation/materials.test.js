/*eslint-disable*/

import * as Materials from '../../app/transformers/api/materials';
import chai from 'chai';
const { expect, should } = chai;

const { parseMaterialArray } = Materials;

describe('transformers/api/materials', () => {
  describe('#parseMaterialArray', () => {
    expect(parseMaterialArray([100, 100, 200, 50])).to.be.an('object');
  });
});
