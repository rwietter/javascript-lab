"use strict";

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      "skills",
      [{ name: "Node.js" }, { name: "ReactJS" }, { name: "Javascript" }],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete("skills", null, {});
  }
};
