'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('educational_backgrounds', [
      { id: 1, description: 'Ensino Fundamental Incompleto' },
      { id: 2, description: 'Ensino Fundamental Completo' },
      { id: 3, description: 'Ensino Médio Incompleto' },
      { id: 4, description: 'Ensino Médio Completo' },
      { id: 5, description: 'Ensino Superior Incompleto' },
      { id: 6, description: 'Ensino Superior Completo' },
      { id: 7, description: 'Pós-graduação' },
      { id: 8, description: 'Mestrado' },
      { id: 9, description: 'Doutorado' }
    ], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('educational_backgrounds', null, {});
  }
};
