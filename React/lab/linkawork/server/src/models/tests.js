"use strict";
module.exports = (sequelize, DataTypes) => {
  const test = sequelize.define(
    "tests",
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      type: DataTypes.ENUM(["profile"]),
      user_id: {
        type: DataTypes.INTEGER,
        reference: {
          model: "users",
          key: "id"
        }
      }
    },
    {}
  );
  test.associate = function(models) {
    test.belongsTo(models.users, { foreignKey: "user_id" });
    models.users.hasMany(test, { foreignKey: "user_id" });
  };
  return test;
};
