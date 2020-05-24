"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("users", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      firstname: { type: Sequelize.STRING(255) },
      company_name: { type: Sequelize.STRING(255) },
      lastname: { type: Sequelize.STRING(255), allowNull: false },
      email: { type: Sequelize.STRING(255), allowNull: false },
      cpf: { type: Sequelize.STRING(45), allowNull: true, unique: true },
      cnpj: { type: Sequelize.STRING(45), allowNull: true, unique: true },
      phone: Sequelize.STRING(16),
      type: {
        type: Sequelize.STRING(45),
        allowNull: false
      },
      zipcode: Sequelize.INTEGER,
      address: Sequelize.STRING(255),
      city: Sequelize.STRING(255),
      state: { type: Sequelize.STRING(255), allowNull: true },
      password: { type: Sequelize.STRING(255) },
      birthday: Sequelize.DATE,
      educational_backgrounds_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: "educational_backgrounds", key: "id" }
      },
      linkedin_id: Sequelize.STRING,
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
    return queryInterface.dropTable("users");
  }
};
