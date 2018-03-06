const Hapi = require('hapi');
const Route = require('./route');

const server = new Hapi.Server();

server.connection({
  port: 8000,
  host: 'localhost',
});

server.route(Route);

if (!module.parent) {
  server.start((err) => {
    if (err) {
      throw err;
    }
    console.log('Server created at: ', server.info.uri);
  });
}

module.exports = server;
