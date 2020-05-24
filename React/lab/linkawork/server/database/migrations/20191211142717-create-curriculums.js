"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("curriculums", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      filename: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "users",
          key: "id"
        }
      },
      name: Sequelize.STRING(45),
      email: Sequelize.STRING(45),
      zipcode: Sequelize.INTEGER,
      phone: Sequelize.STRING(45),
      years: Sequelize.INTEGER,
      marital_status: Sequelize.STRING(45),
      state: Sequelize.STRING(45),
      birthday: Sequelize.DATE,
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
      deletedAt: Sequelize.DATE
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable("curriculums");
  }
};
