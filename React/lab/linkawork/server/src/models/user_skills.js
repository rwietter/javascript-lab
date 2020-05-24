"use strict";
module.exports = (sequelize, DataTypes) => {
  const user_skills = sequelize.define(
    "user_skills",
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
      skill: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
        references: {
          model: "skills",
          key: "id"
        }
      },
      stars: {
        allowNull: false,
        type: DataTypes.INTEGER
      }
    },
    {}
  );
  user_skills.associate = function(models) {
    user_skills.belongsTo(models.users, { foreignKey: "user_id" });
    models.users.hasMany(user_skills, { foreignKey: "user_id" });
    user_skills.belongsTo(models.skills, {
      foreignKey: "skill",
      as: "skill_fk"
    });
    models.skills.hasMany(user_skills, { foreignKey: "skill", as: "skill_fk" });
  };
  return user_skills;
};
