const handler = (request, reply) => {
  reply('Working!');
};

module.exports = {
  path: '/ping',
  method: 'GET',
  handler,
};
