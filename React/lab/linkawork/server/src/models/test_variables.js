"use strict";
module.exports = (sequelize, DataTypes) => {
  const test_variables = sequelize.define(
    "test_variables",
    {
      test_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "tests",
          key: "id"
        }
      },
      variable_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "variables",
          key: "id"
        }
      }
    },
    {}
  );
  test_variables.associate = function(models) {
    test_variables.belongsTo(models.tests, { foreignKey: "test_id" });
    models.tests.hasMany(test_variables, { foreignKey: "test_id" });
    test_variables.belongsTo(models.variables, { foreignKey: "variable_id" });
    models.variables.hasMany(test_variables, { foreignKey: "variable_id" });
  };
  return test_variables;
};
