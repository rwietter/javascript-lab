'use strict';
module.exports = (sequelize, DataTypes) => {
  const test_option_actions = sequelize.define('test_option_actions', {
    option_is: DataTypes.INTEGER,
    variable_id: DataTypes.INTEGER,
    operator_id: DataTypes.INTEGER,
    variable_secondary_id: DataTypes.INTEGER,
    number: DataTypes.INTEGER,
    order_number: DataTypes.INTEGER
  }, {});
  test_option_actions.associate = function(models) {
    // associations can be defined here
  };
  return test_option_actions;
};