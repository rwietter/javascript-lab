"use strict";
module.exports = (sequelize, DataTypes) => {
  const languages = sequelize.define(
    "languages",
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      description: DataTypes.STRING,
      code: {
        allowNull: false,
        type: DataTypes.STRING
      },
      image: DataTypes.STRING
    },
    {}
  );
  languages.associate = function(models) {
    // associations can be defined here
  };
  return languages;
};
