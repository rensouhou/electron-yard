/*eslint-disable*/

import * as Materials from '../../app/transformers/api/materials';
import chai from 'chai';
const { expect, should } = chai;

const { parseMaterialArray } = Materials;

describe('transformers/api/materials', () => {
  describe('#parseMaterialArray', () => {
    it('parses a `KCSApi.Models.Material` model correctly', () => {
      expect(parseMaterialArray([100, 100, 200, 50])).to.eql({ fuel: 100, ammo: 100, steel: 200, bauxite: 50 });
    });
    it('parses a short materials array');
    it('parses a long materials array');
    it('handles different-sized material arrays correctly');
    it('handles null values without error');
    it('handles invalid input properly');
  });

});
