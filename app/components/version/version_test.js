'use strict';

describe('portfolio.version module', function() {
  beforeEach(module('portfolio.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
