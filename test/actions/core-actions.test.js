import chai from 'chai';
import R from 'ramda';
import { isFSA } from 'flux-standard-action';
import {
  registerGameView,
  takeScreenshot,
  registerNotificationHandlers
} from '../../app/actions/core';
const { expect, should } = chai;

const onlyObjects = R.allPass([R.is(Object), R.complement(R.is(Array))]);

describe('Core Application actions', function () {
  it('only returns `flux-standard-action`-compliant action objects');
});
