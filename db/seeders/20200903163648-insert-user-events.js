'use strict';
const db = require('../models');
const {User, Event} = db;
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
   const events = await Event.findAll();
   await queryInterface.bulkInsert('UserEvents', [
    r({userId: users[0].id, eventId: events[0].id}),
    r({userId: users[0].id, eventId: events[1].id}),
    r({userId: users[0].id, eventId: events[2].id}),
    r({userId: users[1].id, eventId: events[1].id}),
    r({userId: users[1].id, eventId: events[2].id}),
    r({userId: users[2].id, eventId: events[2].id}),
  ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
