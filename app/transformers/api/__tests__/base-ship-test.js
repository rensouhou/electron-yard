/* eslint no-undef: 0 */
/**
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/transformers/api/__tests__/base-ship
 */
import { baseShip } from '../base-ship';

jest.unmock('../base-ship');

describe('base-ship transformer', () => {
  it('parses a `KCS.Models.BaseShip` model correctly');
  it('should correctly handle a friendly ship');
  it('should correctly parse an enemy ship');
  it('should handle null fields');
});
