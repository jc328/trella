'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Cards', [
      { title: 'Study for the test', description: 'Need to review your work', comments: 'Lets Have Coffee', list_id: 1, createdAt: new Date(), updatedAt: new Date()},
      { title: 'Prepare Work Project', description: 'Need to review your work', comments: 'Lets Have Coffee', list_id: 1, createdAt: new Date(), updatedAt: new Date()},
      { title: 'Play some games', description: 'Need to review your work', comments: 'Lets Have Coffee', list_id: 2, createdAt: new Date(), updatedAt: new Date()},
      { title: 'Read new books', description: 'Need to review your work', comments: 'Lets Have Coffee', list_id: 2, createdAt: new Date(), updatedAt: new Date()},
      { title: 'Piano', description: 'Need to review your work', comments: 'Lets Have Coffee', list_id: 10, createdAt: new Date(), updatedAt: new Date()},
      { title: 'Spanish', description: 'Need to review your work', comments: 'Lets Have Coffee', list_id: 10, createdAt: new Date(), updatedAt: new Date()},
      { title: 'Test', description: 'Need to review your work', comments: 'Lets Have Coffee', list_id: 11, createdAt: new Date(), updatedAt: new Date()},
      { title: 'Coffee', description: 'Need to review your work', comments: 'Lets Have Coffee', list_id: 11, createdAt: new Date(), updatedAt: new Date()},
      { title: 'Buy Leash', description: 'Need to review your work', comments: 'Lets Have Coffee', list_id: 11, createdAt: new Date(), updatedAt: new Date()},
      { title: 'Buy Some Balloons', description: 'Need to review your work', comments: 'Lets Have Coffee', list_id: 4, createdAt: new Date(), updatedAt: new Date()},
      { title: 'Get Food', description: 'Need to review your work', comments: 'Lets Have Coffee', list_id: 4, createdAt: new Date(), updatedAt: new Date()},
      { title: 'Work on music', description: 'Need to review your work', comments: 'Lets Have Coffee', list_id: 4, createdAt: new Date(), updatedAt: new Date()},
      { title: 'Create a Guest List', description: 'Need to review your work', comments: 'Lets Have Coffee', list_id: 4, createdAt: new Date(), updatedAt: new Date()},
      { title: 'Have Fun!', description: 'Need to review your work', comments: 'Lets Have Coffee', list_id: 4, createdAt: new Date(), updatedAt: new Date()},
      { title: 'Clean Up', description: 'Need to review your work', comments: 'Lets Have Coffee', list_id: 6, createdAt: new Date(), updatedAt: new Date()},
      { title: 'Learn a new Recipe', description: 'Need to review your work', comments: 'Lets Have Coffee', list_id: 6, createdAt: new Date(), updatedAt: new Date()},
      { title: 'Go on a Hike', description: 'Need to review your work', comments: 'Lets Have Coffee', list_id: 4, createdAt: new Date(), updatedAt: new Date()},
      { title: 'Make Dinner Reservations', description: 'Need to review your work', comments: 'Lets Have Coffee', list_id: 3, createdAt: new Date(), updatedAt: new Date()},
      { title: 'Buy Some Wine', description: 'Need to review your work', comments: 'Lets Have Coffee', list_id: 2, createdAt: new Date(), updatedAt: new Date()},
      { title: 'Go Kayaking', description: 'Need to review your work', comments: 'Lets Have Coffee', list_id: 3, createdAt: new Date(), updatedAt: new Date()},
      { title: 'Pickup Rental Car', description: 'Need to review your work', comments: 'Lets Have Coffee', list_id: 3, createdAt: new Date(), updatedAt: new Date()},
      { title: 'Live Demo', description: 'Need to review your work', comments: 'Lets Have Coffee', list_id: 2, createdAt: new Date(), updatedAt: new Date()},


    ])

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Cards', {
      id: { [Sequelize.Op.gt]: 0 }
      });
  }
};
