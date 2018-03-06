const recursiveCreate = require('../../src/helpers/recursiveCreate');

describe('testing function', () => {
  test('testing for collisions', (done) => {
    const longurl1 = 'http://newsite1';
    const longurl2 = 'http://newsite2';
    const commonhash = 'qwerty123456';
    const l1codePromise = recursiveCreate(longurl1, commonhash, 0, 6);
    l1codePromise.then((l1code) => {
      expect(l1code).toBe(commonhash.substring(0, 6));
      const l2codePromise = recursiveCreate(longurl2, commonhash, 0, 6);
      l2codePromise.then((l2code) => {
        expect(l2code).toBe(commonhash.substring(6, 12));
      });
    });
  });
});

