'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Lists', [







    ])

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Lists', {
      id: { [Sequelize.Op.gt]: 0 }
      });
  }
};
