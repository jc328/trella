'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      { name: 'John', email: 'test@gmail.com', password: 'hashed', salt: 'salted', session_token: '123412', createdAt: new Date(), updatedAt: new Date()},
      { name: 'Patricia', email: 'pati@gmail.com', password: 'pawef', salt: 'asdf', session_token: 'gwesd', createdAt: new Date(), updatedAt: new Date()},
      { name: 'Sebastian', email: 'Sebby@gmail.com', password: 'treats', salt: 'fweas', session_token: 'gweefsd', createdAt: new Date(), updatedAt: new Date()}






    ])

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', {
      id: { [Sequelize.Op.gt]: 0 }
      });
  }
};
