"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "experiences",
      [
        {
          user: 2,
          company: 1,
          position: 1,
          initial_date: new Date(2019, 6, 15)
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("experiences", null, {});
  }
};
