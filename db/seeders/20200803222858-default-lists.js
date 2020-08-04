'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Lists', [
      { title: 'First Day', board_id: 1, archive: false, createdAt: new Date(), updatedAt: new Date()},
      { title: 'Second Day', board_id: 1, archive: false, createdAt: new Date(), updatedAt: new Date()},
      { title: 'Third Day', board_id: 1, archive: false, createdAt: new Date(), updatedAt: new Date()},
      { title: 'First Day', board_id: 2, archive: false, createdAt: new Date(), updatedAt: new Date()},
      { title: 'Second Day', board_id: 2, archive: false, createdAt: new Date(), updatedAt: new Date()},
      { title: 'Third Day', board_id: 2, archive: false, createdAt: new Date(), updatedAt: new Date()},
      { title: 'First Day', board_id: 3, archive: false, createdAt: new Date(), updatedAt: new Date()},
      { title: 'Second Day', board_id: 3, archive: false, createdAt: new Date(), updatedAt: new Date()},
      { title: 'Third Day', board_id: 3, archive: false, createdAt: new Date(), updatedAt: new Date()}







    ])

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Lists', {
      id: { [Sequelize.Op.gt]: 0 }
      });
  }
};
