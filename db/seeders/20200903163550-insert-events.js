'use strict';
const db = require('../models');
const { User, Group } = db;
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    function r(o) {
      o.createdAt = new Date();
      o.updatedAt = new Date();
      return o;
    }
    const users = await User.findAll();
    const groups = await Group.findAll();
    await queryInterface.bulkInsert('Events', [
      r({ name: 'Future Breakfast', description: 'All things breakfast!', date: '3030-01-01 09:00:00', attendance: 0, seats: 15, hostId: users[0].id, groupId: groups[0].id }),
      r({ name: 'Future Lunch', description: 'All things lunch!', date: '3030-01-01 12:00:00', attendance: 0, seats: 15, hostId: users[1].id, groupId: groups[1].id }),
      r({ name: 'Future Dinner', description: 'All things dinner!', date: '3030-01-01 18:00:00', attendance: 0, seats: 15, hostId: users[2].id, groupId: groups[2].id }),
      r({ name: 'Future Breakfast', description: 'New things breakfast!', date: '3030-01-02 09:00:00', attendance: 0, seats: 15, hostId: users[0].id, groupId: groups[0].id }),
      r({ name: 'Future Lunch', description: 'New things lunch!', date: '3030-01-03 12:00:00', attendance: 0, seats: 15, hostId: users[1].id, groupId: groups[1].id }),
      r({ name: 'Future Dinner', description: 'New things dinner!', date: '3030-01-04 18:00:00', attendance: 0, seats: 15, hostId: users[2].id, groupId: groups[2].id }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Events', null, {});
  }
};
