const Server = require('../../src/server');

describe('testing read api', () => {
  test('should respond with 200 status', (done) => {
    const options = {
      method: 'GET',
      url: '/read/67dgd6',
    };
    Server.inject(options, (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
  test('should respond correct longurl', (done) => {
    const options = {
      method: 'GET',
      url: '/read/0bAZeJ',
    };
    Server.inject(options, (response) => {
      expect(response.result).toBe('http://somerandomurl0');
      done();
    });
  });
});

