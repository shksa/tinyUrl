const Models = require('../../models');
const redis = require('redis');

const client = redis.createClient();

module.exports = [
  {
    method: 'GET',
    path: '/read/{shorturl}',
    handler: (request, response) => {
      const { shorturl } = request.params;
      client.hget('shortUrlHash', shorturl, (err, value) => {
        console.log('redis', err, value);
        if (value) {
          response(value);
        } else {
          Models.urls.find({
            where: {
              shorturl,
            },
          }).then((res) => {
            if (res) {
              client.hset('shortUrlHash', res.dataValues.shorturl, res.dataValues.longurl, redis.print);
              response(res.dataValues.longurl);
            } else {
              response('url not found');
            }
          });
        }
      });
    },
  },
];
