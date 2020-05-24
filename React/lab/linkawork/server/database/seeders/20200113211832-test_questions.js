"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "test_questions",
      [
        {
          test_id: 1,
          description: "EU SOU:",
          type: "objective"
        },
        {
          test_id: 1,
          description: "QUEM QUISER SE DAR BEM COMIGO:",
          type: "objective"
        },
        {
          test_id: 1,
          description: "EU ME DIVIRTO QUANDO:",
          type: "objective"
        },
        {
          test_id: 1,
          description: "MINHA PREOCUPAÇÃO É:",
          type: "objective"
        },
        {
          test_id: 1,
          description: "EU GOSTO DE:",
          type: "objective"
        },
        {
          test_id: 1,
          description: "PARA BONS RESULTADOS É PRECISO:",
          type: "objective"
        },
        {
          test_id: 1,
          description: "EU PENSO QUE:",
          type: "objective"
        },
        {
          test_id: 1,
          description: "EU GOSTO DE:",
          type: "objective"
        },
        {
          test_id: 1,
          description: "EU GOSTO DE CHEGAR:",
          type: "objective"
        },
        {
          test_id: 1,
          description: "UM ÓTIMO DIA PRA MIM É QUANDO:",
          type: "objective"
        },
        {
          test_id: 1,
          description: "EU VEJO A MORTE COMO:",
          type: "objective"
        },
        {
          test_id: 1,
          description: "MINHA FILOSOFIA DE VIDA É:",
          type: "objective"
        },
        {
          test_id: 1,
          description: "EU SEMPRE GOSTEI DE:",
          type: "objective"
        },
        {
          test_id: 1,
          description: "EU GOSTO DE MUDANÇAS SE:",
          type: "objective"
        },
        {
          test_id: 1,
          description: "NÃO EXISTE NADA DE ERRADO EM:",
          type: "objective"
        },
        {
          test_id: 1,
          description: "BUSCO CONSELHOS EM:",
          type: "objective"
        },
        {
          test_id: 1,
          description: "MEU LEMA É:",
          type: "objective"
        },
        {
          test_id: 1,
          description: "EU GOSTO DE:",
          type: "objective"
        },
        {
          test_id: 1,
          description: "TEMPO PRA MIM É:",
          type: "objective"
        },
        {
          test_id: 1,
          description: "SE EU FOSSE BILIONÁRIO:",
          type: "objective"
        },
        {
          test_id: 1,
          description: "EU ACREDITO QUE:",
          type: "objective"
        },
        {
          test_id: 1,
          description: "EU TAMBÉM ACREDITO QUE:",
          type: "objective"
        },
        {
          test_id: 1,
          description: "EU ACREDITO AINDA QUE:",
          type: "objective"
        },
        {
          test_id: 1,
          description: "EU PENSO QUE:",
          type: "objective"
        }
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("test_questions", null, {})
};
