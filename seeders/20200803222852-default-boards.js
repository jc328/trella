'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Boards', [







    ])

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Boards', {
      id: { [Sequelize.Op.gt]: 0 }
      });
  }
};
