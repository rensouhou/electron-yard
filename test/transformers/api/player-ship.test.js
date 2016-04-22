import { playerShip } from '../../../app/transformers/api/player-ship';
import chai from 'chai';
const { expect, should } = chai;

describe('transformers.api.playerShip', function () {
  describe('[default]', function () {
    it('handles an invalid ship gracefully');
    it('parses a valid own ship');
    it('parses a valid opponent ship');
  });
});
