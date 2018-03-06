const getHash = require('../helpers/getHash');
const Models = require('../../models');

async function recursiveCreate(longurl, shorturlHash, start, size) {
  const shorturl = shorturlHash.substr(start, start + size);
  const createOp = await Models.urls.findOrCreate({
    where: {
      shorturl,
    },
  });
  if ((createOp[1] === true) || (createOp[0].dataValues.longurl === longurl)) {
    return shorturl;
  }
  return recursiveCreate(longurl, shorturlHash, start + 6, size);
}

const handler = (request, reply) => {
  const longurlPayload = request.payload.longurl;
  const shortUrlHash = getHash(longurlPayload);
  return recursiveCreate(longurlPayload, shortUrlHash, 0, 6).then(result => reply(result));
};

module.exports = {
  path: '/write',
  method: 'POST',
  handler,
};
