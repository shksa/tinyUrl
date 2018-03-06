const shortAndLongUrlArray = require('../src/helpers/getUrls');

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('urls', shortAndLongUrlArray, {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('urls'),
};
