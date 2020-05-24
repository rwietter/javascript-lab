"use strict";
module.exports = (sequelize, DataTypes) => {
  const test_answers = sequelize.define(
    "test_answers",
    {
      question_id: {
        type: DataTypes.INTEGER,
        reference:{
          model: "test_questions",
          key: "id"
        }
      },
      user_id: {
        type: DataTypes.INTEGER,
        reference:{
          model: "users",
          key: "id"
        }
      },
      answer: DataTypes.STRING,
      option_id: {
        type: DataTypes.INTEGER,
        reference:{
          model: "test_question_options",
          key: "id"
        }
      }
    },
    {}
  );
  test_answers.associate = function(models) {
    // associations can be defined here
  };
  return test_answers;
};
