const ping = require('./ping');
const write = require('./write');

module.exports = [].concat(ping, write);
