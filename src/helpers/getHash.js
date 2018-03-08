const crypto = require('crypto');

const getHash = inputStr => crypto.createHash('md5').update(inputStr).digest('base64').replace(/\//g, '_');

module.exports = getHash;
