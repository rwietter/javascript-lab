"use strict";
module.exports = (sequelize, DataTypes) => {
  const experience_skills = sequelize.define(
    "experience_skills",
    {
      experience_id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
        references: {
          model: "experiences",
          key: "id"
        }
      },
      skill_id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
        references: {
          model: "skills",
          key: "id"
        }
      },
      description: {
        type: DataTypes.STRING
      }
    },
    {}
  );
  experience_skills.associate = function(models) {
    experience_skills.belongsTo(models.experiences, {
      foreignKey: "experience_id"
    });
    models.experiences.hasMany(experience_skills, {
      foreignKey: "experience_id"
    });
    experience_skills.belongsTo(models.skills, { foreignKey: "skill_id" });
    models.skills.hasMany(experience_skills, { foreignKey: "skill_id" });
  };
  return experience_skills;
};
