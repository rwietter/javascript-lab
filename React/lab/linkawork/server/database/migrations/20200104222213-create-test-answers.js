'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('test_answers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      question_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        reference:{
          model: "test_questions",
          key: "id"
        }
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        reference:{
          model: "users",
          key: "id"
        }
      },
      answer: {
        type: Sequelize.STRING
      },
      option_id: {
        type: Sequelize.INTEGER,
        reference:{
          model: "test_question_options",
          key: "id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('test_answers');
  }
};