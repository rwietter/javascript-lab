"use strict";
module.exports = (sequelize, DataTypes) => {
  const ocupation_areas = sequelize.define(
    "ocupation_areas",
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      description: DataTypes.STRING
    },
    {}
  );
  ocupation_areas.associate = function(models) {
    // associations can be defined here
  };
  return ocupation_areas;
};
