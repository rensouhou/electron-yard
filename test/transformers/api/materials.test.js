import * as Materials from '../../../app/transformers/api/materials';
import chai from 'chai';
const { expect, should } = chai;

const { parseMaterialArray } = Materials;

describe('transformers/api/materials', function () {
  describe('#parseMaterialArray', function () {
    it('parses a `KCSApi.Models.Material` model correctly');

    it('parses a short materials array', function () {
      const input = [100, 100, 200, 50];
      const result = {
        fuel: 100,
        ammo: 100,
        steel: 200,
        bauxite: 50
      };
      expect(parseMaterialArray(input)).to.eql(result);
    });

    it('parses a long materials array', function () {
      const input = [100, 100, 200, 50, 12, 34, 56, 78];
      const result = {
        fuel: 100,
        ammo: 100,
        steel: 200,
        bauxite: 50,
        instantConstruction: 12,
        instantRepair: 34,
        developmentMaterials: 56,
        improvementMaterials: 78
      };
      expect(parseMaterialArray(input)).to.eql(result);
    });

    it('handles different-sized material arrays correctly', function () {
      const base = [
        [0, 10, 20, 30],
        [432, 234, 531],
        [null, undefined, 'a', 'help', 100, 200, Function, 400]
      ];
      const output = [
        { fuel: 0, ammo: 10, steel: 20, bauxite: 30 },
        { fuel: 432, ammo: 234, steel: 531 },
        { instantConstruction: 100, instantRepair: 200, improvementMaterials: 400 }
      ];

      const input = base.map(parseMaterialArray);
      expect(input).to.deep.eql(output);
    });

    it('handles null values in arrays', function () {
      const input = [100, null, undefined, 50];
      const result = { fuel: 100, bauxite: 50 };
      expect(parseMaterialArray(input)).to.eql(result);
    });

    it('handles invalid input properly');
  });

});
