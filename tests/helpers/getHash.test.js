const getHash = require('../../src/helpers/getHash');

describe('Test function getHash: ', () => {
  test('Should return a string: ', () => {
    const hash = getHash('dwdfc');
    expect(typeof hash).toBe('string');
  });
});

