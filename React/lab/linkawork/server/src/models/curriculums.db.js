"use strict";
module.exports = (sequelize, DataTypes) => {
  const curriculums = sequelize.define(
    "curriculums",
    {
      filename: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "users",
          key: "id"
        }
      },
      name: DataTypes.STRING(45),
      email: DataTypes.STRING(45),
      zipcode: DataTypes.INTEGER,
      phone: DataTypes.STRING(45),
      years: DataTypes.INTEGER,
      marital_status: DataTypes.STRING(45),
      state: DataTypes.STRING(45),
      birthday: DataTypes.DATE
    },
    {}
  );
  curriculums.associate = function(models) {
    models.users.hasMany(curriculums, {
      foreignKey: "user_id"
    });
    curriculums.belongsTo(models.users, {
      foreignKey: "user_id"
    });
  };
  return curriculums;
};
