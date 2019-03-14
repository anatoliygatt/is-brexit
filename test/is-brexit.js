const assert = require('assert');
const isBrexit = require('../lib/is-brexit');

describe('is-brexit', () => {
  describe('init', () => {
    it('should always return true', () => {
      assert.equal(isBrexit(), true, 'Function should always return true');
    });
  });
});
