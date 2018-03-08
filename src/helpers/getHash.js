const crypto = require('crypto');

const getHash = inputStr => crypto.createHash('md5').update(inputStr).digest('hex');

module.exports = getHash;
