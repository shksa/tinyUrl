const getUrls = require('../../src/helpers/getUrls');

describe('Test the helper function getUrls: ', () => {
  test('The size should be less than or equal to: ', () => {
    expect(getUrls.length).toBeLessThanOrEqual(1e6);
  });

  test('The returned value should be of type array: ', () => {
    expect(getUrls).toBeInstanceOf(Array);
  });
});

