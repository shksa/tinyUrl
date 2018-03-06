const getHash = require('../helpers/getHash');
const { recursiveCreate } = require('../../src/helpers/recursiveCreate');

const handler = (request, reply) => {
  const longurlPayload = request.payload.longurl;
  const shortUrlHash = getHash(longurlPayload);
  console.log(shortUrlHash);
  return recursiveCreate(longurlPayload, shortUrlHash, 0, 6).then(result => reply(result));
};

module.exports = {
  path: '/write',
  method: 'POST',
  handler,
};
