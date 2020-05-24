"use strict";
module.exports = (sequelize, DataTypes) => {
  const user_ocupation_areas = sequelize.define(
    "user_ocupation_areas",
    {
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      ocupation_area_id: {
        allowNull: false,
        type: DataTypes.INTEGER
      }
    },
    {}
  );
  user_ocupation_areas.associate = function(models) {
    user_ocupation_areas.belongsTo(models.users, {
      foreignKey: "user_id"
    });
    models.users.hasMany(user_ocupation_areas, {
      foreignKey: "user_id"
    });
    user_ocupation_areas.belongsTo(models.ocupation_areas, {
      foreignKey: "ocupation_area_id"
    });
    models.ocupation_areas.hasMany(user_ocupation_areas, {
      foreignKey: "ocupation_area_id"
    });
  };
  return user_ocupation_areas;
};
