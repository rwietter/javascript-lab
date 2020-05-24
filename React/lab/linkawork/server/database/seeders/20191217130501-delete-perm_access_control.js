"use strict";

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      "perm_access_control",
      [
        {
          token: 61564897,
          user_id: 1
        }
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete("perm_access_control", null, {});
  }
};
