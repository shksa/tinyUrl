const Server = require('../../src/server');
const getHash = require('../../src/helpers/getHash');

describe('Test server for route /write: ', () => {
  test('Should return the hash for an existing url: ', (done) => {
    const options = {
      url: '/write',
      method: 'POST',
      payload: {
        longurl: 'http://somerandomurl15',
      },
    };
    Server.inject(options, (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });

  test('Should return the hash for an existing url: ', (done) => {
    const options = {
      url: '/write',
      method: 'POST',
      payload: {
        longurl: 'http://somerandomurl6',
      },
    };
    const hash = getHash('http://somerandomurl6').slice(0, 6);
    // console.log(hash);
    Server.inject(options, (response) => {
      expect(response.result).toBe(hash);
      done();
    });
  });
});
