const ping = require('./ping');
const write = require('./write');
const read = require('./read');

module.exports = [].concat(ping, write, read);
