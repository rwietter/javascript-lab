"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("test_option_actions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      option_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        reference: {
          model: "test_question_options",
          key: "id"
        }
      },
      variable_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        reference: {
          model: "variables",
          key: "id"
        }
      },
      operator_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        reference: {
          model: "operators",
          key: "id"
        }
      },
      variable_secondary_id: {
        type: Sequelize.INTEGER,
        reference: {
          model: "variables",
          key: "id"
        }
      },
      number: {
        type: Sequelize.INTEGER
      },
      order_number: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable("test_option_actions");
  }
};
