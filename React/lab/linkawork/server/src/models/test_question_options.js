"use strict";
module.exports = (sequelize, DataTypes) => {
  const test_question_options = sequelize.define(
    "test_question_options",
    {
      question_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "test_questions",
          key: "id"
        }
      },
      name: DataTypes.STRING,
      correct: DataTypes.BOOLEAN
    },
    {}
  );
  test_question_options.associate = function(models) {
    test_question_options.belongsTo(models.test_questions, { foreignKey: "question_id" });
    models.test_questions.hasMany(test_question_options, { foreignKey: "question_id" });
  };
  return test_question_options;
};
