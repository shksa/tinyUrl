module.exports = (sequelize, DataTypes) => {
  const urls = sequelize.define('urls', {
    shorturl: {
      type: DataTypes.STRING(6),
    },
    longurl: DataTypes.STRING,
  }, {});
  return urls;
};
