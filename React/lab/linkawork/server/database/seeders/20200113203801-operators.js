"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "operators",
      [
        {
          name: "Addition",
          operator: "+",
          type: "arithmetic"
        },
        {
          name: "Subtraction",
          operator: "-",
          type: "arithmetic"
        },
        {
          name: "Multiplication",
          operator: "*",
          type: "arithmetic"
        },
        {
          name: "Division",
          operator: "/",
          type: "arithmetic"
        },
        {
          name: "Equal",
          operator: "==",
          type: "logical"
        },
        {
          name: "Greater Than",
          operator: ">",
          type: "logical"
        },
        {
          name: "Less Than",
          operator: "<",
          type: "logical"
        },
        {
          name: "Greater Than or Equal To",
          operator: ">=",
          type: "logical"
        },
        {
          name: "Less Than or Equal To",
          operator: "<=",
          type: "logical"
        },
        {
          name: "Not Equal To",
          operator: "!=",
          type: "logical"
        },
        {
          name: "Assignment",
          operator: "=",
          type: "assignment"
        },
        {
          name: "Add and assignment",
          operator: "+=",
          type: "assignment"
        },
        {
          name: "Minus and assignment",
          operator: "-=",
          type: "assignment"
        },
        {
          name: "Multiply and assignment",
          operator: "*=",
          type: "assignment"
        },
        {
          name: "Divide and assignment",
          operator: "/=",
          type: "assignment"
        },
        {
          name: "Modulus and assignment",
          operator: "%=",
          type: "assignment"
        }
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("operators", null, {})
};
