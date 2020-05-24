'use strict';
module.exports = (sequelize, DataTypes) => {
  const positions = sequelize.define('positions', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  positions.associate = function(models) {
    // associations can be defined here
  };
  return positions;
};