const Server = require('../../src/server');
const redis = require('redis');

describe('testing read api', () => {
  test('should respond with 200 status', (done) => {
    const options = {
      method: 'GET',
      url: '/read/xGarXz',
    };
    Server.inject(options, (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
  test('should respond correct longurl', (done) => {
    const options = {
      method: 'GET',
      url: '/read/M2PZp_',
    };
    Server.inject(options, (response) => {
      expect(response.result).toBe('http://somerandomurl11');
      done();
    });
  });
  test('should respond "url not found" ', (done) => {
    const options = {
      method: 'GET',
      url: '/read/abcdef',
    };
    Server.inject(options, (response) => {
      expect(response.result).toBe('url not found');
      done();
    });
  });
  test('redis tests', (done) => {
    const options = {
      method: 'GET',
      url: '/read/AQfHh7',
    };
    const client = redis.createClient();
    Server.inject(options, (response) => {
      expect(response.result).toBe('http://somerandomurl1');
      client.hget('shortUrlHash', 'AQfHh7', (err, value) => {
        if (value) {
          expect(value).toBe('http://somerandomurl1');
          done();
        }
      });
    });
  });
});

