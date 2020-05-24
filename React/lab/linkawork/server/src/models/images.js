"use strict";
module.exports = (sequelize, DataTypes) => {
  const images = sequelize.define(
    "images",
    {
      url: {
        type: DataTypes.STRING,
        allowNull: false
      },
      alt: DataTypes.STRING
    },
    {}
  );
  images.associate = function(models) {
    // associations can be defined here
  };
  return images;
};
