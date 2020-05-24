"use strict";

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      "perm_group_has_objects",
      [
        { group_id: 1, object_id: 1 },
        { group_id: 1, object_id: 2 },
        { group_id: 1, object_id: 3 },
        { group_id: 1, object_id: 4 },
        { group_id: 1, object_id: 5 },
        { group_id: 1, object_id: 6 },
        { group_id: 1, object_id: 7 },
        { group_id: 1, object_id: 8 },
        { group_id: 1, object_id: 9 },
        { group_id: 1, object_id: 10 },
        { group_id: 1, object_id: 11 },
        { group_id: 1, object_id: 12 },
        { group_id: 3, object_id: 19 },
        { group_id: 5, object_id: 19 },
        { group_id: 5, object_id: 20 },
        { group_id: 3, object_id: 21 },
        { group_id: 5, object_id: 22 },
        { group_id: 5, object_id: 23 },
        { group_id: 5, object_id: 24 },
        { group_id: 6, object_id: 25 },
        { group_id: 3, object_id: 26 },
        { group_id: 7, object_id: 27 },
        { group_id: 8, object_id: 13 },
        { group_id: 8, object_id: 14 },
        { group_id: 8, object_id: 15 },
        { group_id: 8, object_id: 28 },
        { group_id: 8, object_id: 29 },
        { group_id: 8, object_id: 30 },
        { group_id: 8, object_id: 31 },
        { group_id: 8, object_id: 32 },
        { group_id: 8, object_id: 33 },
        { group_id: 8, object_id: 34 },
        { group_id: 8, object_id: 35 },
        { group_id: 8, object_id: 36 },
        { group_id: 8, object_id: 37 },
        { group_id: 8, object_id: 38 },
        { group_id: 8, object_id: 39 }
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete("perm_group_has_objects", null, {});
  }
};
