'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Permissions', [







    ])

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Permissions', {
      id: { [Sequelize.Op.gt]: 0 }
      });
  }
};
