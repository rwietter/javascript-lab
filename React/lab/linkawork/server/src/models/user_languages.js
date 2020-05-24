"use strict";
module.exports = (sequelize, DataTypes) => {
  const user_languages = sequelize.define(
    "user_languages",
    {
      user_id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
        references: {
          model: "users",
          key: "id"
        }
      },
      language: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
        references: {
          model: "languages",
          key: "id"
        }
      },
      level: DataTypes.INTEGER
    },
    {}
  );
  user_languages.associate = function(models) {
    user_languages.belongsTo(models.users, { foreignKey: "user_id" });
    models.users.hasMany(user_languages, { foreignKey: "user_id" });
    user_languages.belongsTo(models.languages, {
      foreignKey: "language",
      as: "language_fk"
    });
    models.languages.hasMany(user_languages, {
      foreignKey: "language",
      as: "language_fk"
    });
  };
  return user_languages;
};
