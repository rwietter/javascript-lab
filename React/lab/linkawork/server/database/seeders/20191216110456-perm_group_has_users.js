"use strict";

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      "perm_group_has_users",
      [
        { group_id: 1, user_id: 1 },
        { group_id: 1, user_id: 2 },
        { group_id: 3, user_id: 2 },
        { group_id: 5, user_id: 2 },
        { group_id: 1, user_id: 3 },
        { group_id: 3, user_id: 3 },
        { group_id: 5, user_id: 3 },
        { group_id: 6, user_id: 2 },
        { group_id: 6, user_id: 3 },
        { group_id: 7, user_id: 1 },
        { group_id: 7, user_id: 2 },
        { group_id: 7, user_id: 3 },
        { group_id: 8, user_id: 1 },
        { group_id: 8, user_id: 2 },
        { group_id: 8, user_id: 3 }
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete("perm_group_has_users", null, {});
  }
};
