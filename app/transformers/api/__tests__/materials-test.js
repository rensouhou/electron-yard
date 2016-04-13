/* eslint no-undef: 0 */
/**
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/transformers/api/__tests__/materials-test
 */
import { parseMaterialArray, parseMaterialObjects } from '../materials';

jest.unmock('../materials');

describe('materials transformer', () => {
  it('parses a short materials array');
  it('parses a long materials array');
  it('handles different-sized material arrays correctly');
  it('handles null values without error');
  it('parses a list of `KCSApi.Models.Material` objects');
});
