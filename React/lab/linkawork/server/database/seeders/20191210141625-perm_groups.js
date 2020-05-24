"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "perm_groups",
      [
        {
          id: 1,
          name: "ADMIN",
          description: "Administrator of system",
          status: 1
        },
        { id: 2, name: "Básico", description: "Permissões básicas", status: 1 },
        {
          id: 3,
          name: "Pessoa física",
          description: "Permissões de pessoa física",
          status: 1
        },
        {
          id: 4,
          name: "Pessoa juridica",
          description: "Permissões de pessoa juridica",
          status: 1
        },
        {
          id: 5,
          name: "Skills admin",
          description: "A skill administrator",
          status: 1
        },
        {
          id: 6,
          name: "Experiences",
          description: "Manage your experiences",
          status: 1
        },
        {
          id: 7,
          name: "Developers",
          description: "Developers",
          status: 1
        },
        {
          id: 8,
          name: "Test manager",
          description: "A test manager",
          status: 1
        }
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete("perm_groups", null, {});
  }
};
