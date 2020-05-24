"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "tests",
      [
        {
          name: "Teste de perfil Ned Herrmann",
          description: "Lorem",
          user_id: 1,
          type: "profile"
        }
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("tests", null, {})
};
