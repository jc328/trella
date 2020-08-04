'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Permissions', [
      { user_id: 1, board_id: 1, admin: false, edit:true, read:true, createdAt: new Date(), updatedAt: new Date()},
      { user_id: 2, board_id: 2, admin: false, edit:true, read:true, createdAt: new Date(), updatedAt: new Date()},







    ])

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Permissions', {
      id: { [Sequelize.Op.gt]: 0 }
      });
  }
};
