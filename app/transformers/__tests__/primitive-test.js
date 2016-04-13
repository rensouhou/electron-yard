/* eslint no-undef: 0 */
/**
 * @overview
 *
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/transformers/__tests__/primitive-test
 */
import * as Primitive from '../primitive';

jest.unmock('../primitive');

describe('primitive', () => {
  describe('asBool', () => {
    const { asBool } = Primitive;
    it('interprets `1` as `true`', () => {
      expect(asBool(1)).toBe(true);
    });
    it('interprets `"1"` as true', () => {
      expect(asBool('1')).toBe(true);
    });
    it('interprets `0` as `false`', () => {
      expect(asBool(0)).toBe(false);
    });
    it('interprets `"0"` as `false`', () => {
      expect(asBool('0')).toBe(false);
    });
  });
  describe('asNumber', () => {
    const { asNumber } = Primitive;
    it('interprets strings containing negative numbers', () => {
      expect(asNumber('-123')).toBe(-123);
    });
    it('interprets `"123"` as a number', () => {
      expect(asNumber('123')).toBe(123);
    });
    it('interprets `"0"` as a number', () => {
      expect(asNumber('0')).toBe(0);
    });
    it('interprets numbers as integers', () => {
      expect(asNumber('4.20')).toBe(4);
    });
  });
  describe('formatLineBreaks', () => {
    const { formatLineBreaks } = Primitive;
    it('correctly replaces `<br>` with `\\n`', () => {
      expect(formatLineBreaks('My line<br>breaks')).toBe('My line\nbreaks');
    });
    it('correctly replaces `<br />` with `\\n`', () => {
      expect(formatLineBreaks('My line<br />breaks')).toBe('My line\nbreaks');
    });
    it('leaves `\\n` alone', () => {
      expect(formatLineBreaks('My line\nbreaks')).toBe('My line\nbreaks');
    });
  });
  describe('getArrayOrDefault', () => {
    const { getArrayOrDefault } = Primitive;
    it('`null` should return an empty array', () => {
      expect(getArrayOrDefault(null)).toEqual([]);
    });
    it('`undefined` should return an empty array', () => {
      expect(getArrayOrDefault(undefined)).toEqual([]);
    });
    it('should return the original array', () => {
      const arr = [1, 2, 3, 4];
      expect(getArrayOrDefault(arr)).toEqual(arr);
    });
    it('should return non-arrays as-is', () => {
      expect(getArrayOrDefault(1234)).toBe(1234);
    });
  });
  describe('notEmpty', () => {
    const { notEmpty } = Primitive;
  });
});
