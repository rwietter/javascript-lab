"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "language_levels",
      [
        { id: 1, name: "Low beginner" },
        { id: 2, name: "High beginner" },
        { id: 3, name: "Low intermediate" },
        { id: 4, name: "Intermediate" },
        { id: 5, name: "High intermediate" },
        { id: 6, name: "Advanced" }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("language_levels", null, {});
  }
};
