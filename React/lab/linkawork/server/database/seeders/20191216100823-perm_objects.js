"use strict";

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      "perm_objects",
      [
        { id: 1, name: "create-skill", type: "graphql", status: 1 },
        { id: 2, name: "delete-skill", type: "graphql", status: 1 },
        { id: 3, name: "update-skill", type: "graphql", status: 1 },
        { id: 4, name: "create-language", type: "graphql", status: 1 },
        { id: 5, name: "delete-language", type: "graphql", status: 1 },
        { id: 6, name: "update-language", type: "graphql", status: 1 },
        { id: 7, name: "create-position", type: "graphql", status: 1 },
        { id: 8, name: "delete-position", type: "graphql", status: 1 },
        { id: 9, name: "update-position", type: "graphql", status: 1 },
        { id: 10, name: "create-ocupation-area", type: "graphql", status: 1 },
        { id: 11, name: "delete-ocupation-area", type: "graphql", status: 1 },
        { id: 12, name: "update-ocupation-area", type: "graphql", status: 1 },
        {
          id: 13,
          name: "create-tests",
          description: "Create tests",
          type: "graphql",
          status: 1
        },
        {
          id: 14,
          name: "update-tests",
          description: "Update test",
          type: "graphql",
          status: 1
        },
        {
          id: 15,
          name: "delete-tests",
          description: "Delete test",
          type: "graphql",
          status: 1
        },
        { id: 16, name: "create-test-questions", type: "graphql", status: 1 },
        { id: 17, name: "update-test-questions", type: "graphql", status: 1 },
        { id: 18, name: "delete-test-questions", type: "graphql", status: 1 },
        {
          id: 19,
          name: "skills-route",
          description: "A skill route in front-end",
          type: "view",
          status: 1
        },
        {
          id: 20,
          name: "skills-admin",
          description: "A skills admin area",
          type: "view",
          status: 1
        },
        {
          id: 21,
          name: "skills-user",
          description: "A user skills area",
          type: "view",
          status: 1
        },
        {
          id: 22,
          name: "skills-create",
          description: "Create skills",
          type: "view",
          status: 1
        },
        {
          id: 23,
          name: "skills-edit",
          description: "Edit skills",
          type: "view",
          status: 1
        },
        {
          id: 24,
          name: "skills-delete",
          description: "Delete skills",
          type: "view",
          status: 1
        },
        {
          id: 25,
          name: "experiences-route",
          description: "Experiences route",
          type: "view",
          status: 1
        },
        {
          id: 26,
          name: "languages-route",
          description: "Languages route",
          type: "view",
          status: 1
        },
        {
          id: 27,
          name: "form-debug",
          description: "A form debug component",
          type: "view",
          status: 1
        },
        {
          id: 28,
          name: "create-test-variable",
          type: "graphql",
          status: 1
        },
        {
          id: 29,
          name: "update-test-variable",
          type: "graphql",
          status: 1
        },
        {
          id: 30,
          name: "delete-test-variable",
          type: "graphql",
          status: 1
        },
        {
          id: 31,
          name: "create-test-question",
          type: "graphql",
          status: 1
        },
        {
          id: 32,
          name: "update-test-question",
          type: "graphql",
          status: 1
        },
        {
          id: 33,
          name: "delete-test-question",
          type: "graphql",
          status: 1
        },
        {
          id: 34,
          name: "create-test-question-option",
          type: "graphql",
          status: 1
        },
        {
          id: 35,
          name: "update-test-question-option",
          type: "graphql",
          status: 1
        },
        {
          id: 36,
          name: "delete-test-question-option",
          type: "graphql",
          status: 1
        },
        {
          id: 37,
          name: "create-test-action",
          type: "graphql",
          status: 1
        },
        {
          id: 38,
          name: "update-test-action",
          type: "graphql",
          status: 1
        },
        {
          id: 39,
          name: "delete-test-action",
          type: "graphql",
          status: 1
        }
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete("perm_objects", null, {});
  }
};
