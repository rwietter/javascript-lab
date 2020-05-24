'use strict';
module.exports = (sequelize, DataTypes) => {
  const operators = sequelize.define('operators', {
    name: DataTypes.STRING,
    operator: DataTypes.STRING,
    type: DataTypes.ENUM(["arithmetic","logical", "assignment"])
  }, {});
  operators.associate = function(models) {
    // associations can be defined here
  };
  return operators;
};