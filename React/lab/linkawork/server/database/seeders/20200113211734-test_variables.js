"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "test_variables",
      [
        {
          test_id: 1,
          variable_id: 1
        },
        {
          test_id: 1,
          variable_id: 2
        },
        {
          test_id: 1,
          variable_id: 3
        },
        {
          test_id: 1,
          variable_id: 4
        },
        {
          test_id: 1,
          variable_id: 5
        },
        {
          test_id: 1,
          variable_id: 6
        },
        {
          test_id: 1,
          variable_id: 7
        },
        {
          test_id: 1,
          variable_id: 8
        }
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("test_variables", null, {})
};
