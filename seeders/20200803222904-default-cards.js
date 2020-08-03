'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Cards', [
      { title: 'Study', description: 'Need to review your work', comments: 'Lets Have Coffee', list_id: 1, createdAt: new Date(), updatedAt: new Date()},
      { title: 'Work', description: 'Need to review your work', comments: 'Lets Have Coffee', list_id: 1, createdAt: new Date(), updatedAt: new Date()},
      { title: 'Play', description: 'Need to review your work', comments: 'Lets Have Coffee', list_id: 2, createdAt: new Date(), updatedAt: new Date()},
      { title: 'Read', description: 'Need to review your work', comments: 'Lets Have Coffee', list_id: 2, createdAt: new Date(), updatedAt: new Date()},
      { title: 'Piano', description: 'Need to review your work', comments: 'Lets Have Coffee', list_id: 4, createdAt: new Date(), updatedAt: new Date()},
      { title: 'Spanish', description: 'Need to review your work', comments: 'Lets Have Coffee', list_id: 5, createdAt: new Date(), updatedAt: new Date()},
      { title: 'Test', description: 'Need to review your work', comments: 'Lets Have Coffee', list_id: 6, createdAt: new Date(), updatedAt: new Date()},
      { title: 'Coffee', description: 'Need to review your work', comments: 'Lets Have Coffee', list_id: 5, createdAt: new Date(), updatedAt: new Date()},







    ])

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Cards', {
      id: { [Sequelize.Op.gt]: 0 }
      });
  }
};
