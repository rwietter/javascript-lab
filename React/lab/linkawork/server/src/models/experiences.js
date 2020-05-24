"use strict";
module.exports = (sequelize, DataTypes) => {
  const experiences = sequelize.define(
    "experiences",
    {
      user: DataTypes.INTEGER,
      company: DataTypes.INTEGER,
      company_name: DataTypes.STRING,
      position: DataTypes.STRING,
      position_name: DataTypes.STRING,
      initial_date: DataTypes.DATE,
      final_date: DataTypes.DATE,
      description: DataTypes.TEXT
    },
    {}
  );
  experiences.associate = function(models) {
    // associations can be defined here
  };
  return experiences;
};
