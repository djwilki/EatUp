'use strict';
const db = require('../models');
const {User} = db;
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
   await queryInterface.bulkInsert('Groups', [
     r({name: 'Breakfast', description:'All things breakfast!', ownerId: users[0].id}),
     r({name: 'Lunch', description:'All things lunch!', ownerId: users[1].id}),
     r({name: 'Dinner', description:'All things dinner!', ownerId: users[2].id}),
   ]);
  },

  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   await queryInterface.bulkDelete('Groups', null, {});
  }
};
