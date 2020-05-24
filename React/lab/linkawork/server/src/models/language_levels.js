'use strict';
module.exports = (sequelize, DataTypes) => {
  const language_levels = sequelize.define('language_levels', {
    name: DataTypes.STRING
  }, {});
  language_levels.associate = function(models) {
    // associations can be defined here
  };
  return language_levels;
};