"use strict";
module.exports = (sequelize, DataTypes) => {
  const test_question = sequelize.define(
    "test_questions",
    {
      description: DataTypes.TEXT,
      test_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "tests",
          key: "id"
        }
      },
      type: DataTypes.ENUM(["objective", "descriptive"]),
      multiple: DataTypes.BOOLEAN,
      order: DataTypes.INTEGER
    },
    {}
  );
  test_question.associate = function(models) {
    test_question.belongsTo(models.tests, { foreignKey: "test_id" });
    models.tests.hasMany(test_question, { foreignKey: "test_id" });
  };
  return test_question;
};
