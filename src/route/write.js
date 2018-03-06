const getHash = require('../helpers/getHash');
const Models = require('../../models');

async function recursiveCreate(longurl, shorturlHash, start, size) {
  const shorturl = shorturlHash.substr(start, start + size);
  const response = await Models.urls.find({
    where: {
      shorturl,
    },
  });
  if (response === null) {
    const result = await Models.urls.create({
      shorturl,
      longurl,
    });
    return result.shorturl;
  } else if (response.dataValues.longurl === longurl) {
    return shorturl;
  }
  return recursiveCreate(longurl, shorturlHash, start + 6, size);
}


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
