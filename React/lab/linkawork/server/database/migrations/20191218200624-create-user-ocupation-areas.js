"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable("user_ocupation_areas", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        user_id: {
          allowNull: false,
          type: Sequelize.INTEGER
        },
        ocupation_area_id: {
          allowNull: false,
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
      })
      .then(() =>
        queryInterface.addConstraint(
          "user_ocupation_areas",
          ["user_id", "ocupation_area_id"],
          {
            type: "unique",
            name: "user_ocupation_areas_ukey"
          }
        )
      );
  },
  down: queryInterface => {
    return queryInterface.dropTable("user_ocupation_areas");
  }
};
