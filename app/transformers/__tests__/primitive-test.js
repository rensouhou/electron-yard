/* eslint no-undef: 0 */
/**
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/transformers/__tests__/primitive-test
 */
import * as Primitive from '../primitive';

jest.unmock('../primitive');

describe('primitive transformer', () => {
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

  describe('asBool', () => {
    const { asBool, asNumber } = Primitive;
    it('interprets `1` or `"1"` as `true`', () => {
      expect(asBool(asNumber('1'))).toBe(true);
    });
    it('interprets `0` or `"0"` as `false`', () => {
      expect(asBool(asNumber('0'))).toBe(false);
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
    it('returns an empty string on undefined or null', () => {
      expect(formatLineBreaks()).toBe('');
      expect(formatLineBreaks(null)).toBe('');
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

  describe('getObjectOrDefault', () => {
    const { getObjectOrDefault } = Primitive;
    it('`null` should return an empty object', () => {
      expect(getObjectOrDefault(null)).toEqual({});
    });
    it('`undefined` should return an empty object', () => {
      expect(getObjectOrDefault(undefined)).toEqual({});
    });
    it('should return the original array', () => {
      const obj = { a: 1, b: 2, c: 3, d: 4 };
      expect(getObjectOrDefault(obj)).toEqual(obj);
    });
    it('should return non-objects as-is', () => {
      expect(getObjectOrDefault(1234)).toBe(1234);
    });
  });

  describe('notEmpty', () => {
    const { notEmpty, asNumber } = Primitive;
    it('returns true', () => {
      expect(notEmpty(0)).toBe(true);
      expect(notEmpty(1)).toBe(true);
    });
    it('returns false on "API empty" values', () => {
      expect(notEmpty(asNumber('-1'))).toBe(false);
    });
  });
});
