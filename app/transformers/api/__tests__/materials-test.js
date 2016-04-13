/* eslint no-undef: 0 */
/**
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/transformers/api/__tests__/materials-test
 */
// @todo(@stuf): currently on-hold as Ramda+ES6 in Jasmine herps a derp
import { parseMaterialArray, parseMaterialObjects } from '../materials';

jest.unmock('../materials');

describe('materials transformer', () => {
  it('parses a `KCSApi.Models.Material` model correctly');
  it('parses a short materials array');
  it('parses a long materials array');
  it('handles different-sized material arrays correctly');
  it('handles null values without error');
});
