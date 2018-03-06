const { recursiveCreate } = require('../../src/helpers/recursiveCreate');
const Models = require('../../models');

console.log(recursiveCreate);

describe('testing recursiveCreate function', () => {
  const longurl1 = 'http://newsite1';
  const longurl2 = 'http://newsite2';
  beforeAll((done) => {
    Models.urls.destroy({
      where: {
        longurl: longurl1,
      },
    }).then(() => {
      Models.urls.destroy({
        where: {
          longurl: longurl2,
        },
      }).then(() => {
        console.log('cleared');
        done();
      });
    });
  });
  test('testing for collisions', (done) => {
    const commonhash = 'qwerty123456';
    const l1codePromise = recursiveCreate(longurl1, commonhash, 0, 6);
    l1codePromise.then((l1code) => {
      console.log(l1code);
      expect(l1code).toBe(commonhash.substring(0, 6));
      const l2codePromise = recursiveCreate(longurl2, commonhash, 0, 6);
      l2codePromise.then((l2code) => {
        console.log(l2code);
        expect(l2code).toBe(commonhash.substring(6, 12));
        done();
      });
    });
  });
});

