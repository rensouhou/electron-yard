import * as Primitive from '../../app/transformers/primitive';
import chai from 'chai';
const { expect, should } = chai;

const { asNumber, asBool, getArrayOrDefault, getObjectOrDefault, formatLineBreaks } = Primitive;

describe('transformers/primitive', function () {
  describe('#asNumber', function () {
    it('parses a number correctly (as string)', () => {
      expect(asNumber('-1')).to.be.a('number');
      expect(asNumber('0')).to.be.a('number');
    });
    it('returns null on non-parseable input', () =>  {
      expect(asNumber('-1')).to.be.a('number');
      expect(asNumber('abc')).not.to.be.a('number');
      expect(asNumber('abc')).to.equal(null);
    });
  });
  describe('#asBool', function () {
    it('casts a number to boolean correctly', () => {
      expect(asBool('1')).to.equal(true);
      expect(asBool('0')).to.equal(false);
      expect(asBool('-1')).to.equal(false);
    });
    it('parses a string correctly', () => {
      expect(asBool('abc')).to.equal(false);
    });
  });
  describe('#getArrayOrDefault', function () {
    it('returns an empty array', () => {
      expect(getArrayOrDefault(null)).to.be.a('array');
      expect(getArrayOrDefault(undefined)).to.be.a('array');
    });
    it('returns the original when falsy', () => {
      expect(getArrayOrDefault(1234)).to.equal(1234);
      expect(getArrayOrDefault('abcd')).to.equal('abcd');
    });
  });
  describe('#getObjectOrDefault', () => {
    it('returns an empty object when falsy', () => {
      expect(getObjectOrDefault(null)).to.be.an('object');
      expect(getObjectOrDefault(undefined)).to.be.an('object');
    });
    it('returns the original', () => {
      expect(getObjectOrDefault(1234)).to.equal(1234);
      expect(getObjectOrDefault('abcd')).to.equal('abcd');
    });
  });
  describe('#formatLineBreaks', () => {
    it('correctly replaces `<br>` with `\\n`', () => {
      expect(formatLineBreaks('My line<br>breaks')).to.equal('My line\nbreaks');
    });
    it('correctly replaces `<br />` with `\\n`', () => {
      expect(formatLineBreaks('My line<br />breaks')).to.equal('My line\nbreaks');
    });
    it('leaves `\\n` alone', () => {
      expect(formatLineBreaks('My line\nbreaks')).to.equal('My line\nbreaks');
    });
    it('returns an empty string on undefined or null', () => {
      expect(formatLineBreaks()).to.equal('');
      expect(formatLineBreaks(null)).to.equal('');
    });
  })
});
