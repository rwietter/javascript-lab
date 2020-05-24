"use strict";

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      "languages",
      [
        {
          name: "Inglês",
          code: "en-US",
          image: "united-states-of-america.svg"
        }
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete("languages", null, {});
  }
};
