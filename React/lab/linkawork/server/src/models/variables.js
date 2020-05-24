"use strict";
module.exports = (sequelize, DataTypes) => {
  const variables = sequelize.define(
    "variables",
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      type: DataTypes.ENUM(["test"]),
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        reference: {
          model: "users",
          key: "id"
        }
      }
    },
    {}
  );
  variables.associate = function(models) {
    variables.belongsTo(models.users, { foreignKey: "user_id" });
    models.users.hasMany(variables, { foreignKey: "user_id" });
  };
  return variables;
};
