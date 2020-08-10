'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Boards', [
      { title: 'Vacation', user_id: 1, favorite: false, archive: false, createdAt: new Date(), updatedAt: new Date()},
      { title: 'Fiesta Planning', user_id: 2, favorite: false, archive: false, createdAt: new Date(), updatedAt: new Date()},
      { title: 'Work', user_id: 1, favorite: false, archive: false, createdAt: new Date(), updatedAt: new Date()},
      { title: 'Fiesta Planning', user_id: 2, favorite: false, archive: false, createdAt: new Date(), updatedAt: new Date()}






    ])

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Boards', {
      id: { [Sequelize.Op.gt]: 0 }
      });
  }
};
