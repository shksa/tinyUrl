const Models = require('../../models');

module.exports = {
  method: 'GET',
  path: '/read/{shorturl}',
  handler: (request, reply) => {
    const { shorturl } = request.params;
    Models.urls.find({
      where: {
        shorturl,
      },
    }).then((obj) => {
      if (obj) {
        reply(obj.dataValues.longurl);
      } else {
        reply('no url found');
      }
    });
  },
};

