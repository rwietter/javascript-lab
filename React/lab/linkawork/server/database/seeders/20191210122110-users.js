"use strict";
const bcrypt = require("bcrypt");
module.exports = {
  up: queryInterface => {
    let salt = bcrypt.genSaltSync(10);
    return queryInterface.bulkInsert(
      "users",
      [
        {
          firstname: "Matheus",
          lastname: "Mallmann",
          company_name: "Linkawork",
          email: "corporative@linkawork.com",
          password: bcrypt.hashSync("123456789", salt),
          type: "legal"
        },
        {
          firstname: "Matheus Vinicius",
          lastname: "Mallmann",
          email: "matheusvmallmann@gmail.com",
          educational_backgrounds_id: 5,
          password: bcrypt.hashSync("123456789", salt),
          type: "physical"
        },
        {
          firstname: "Maurício",
          lastname: "Witter",
          email: "euiciowr@gmail.com",
          educational_backgrounds_id: 7,
          password: bcrypt.hashSync("123456789", salt),
          type: "physical"
        }
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete("users", null, {});
  }
};
