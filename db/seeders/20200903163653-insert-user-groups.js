'use strict';
const db = require('../models');
const {User, Group} = db;
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
   await queryInterface.bulkInsert('UserGroups', [
    r({userId: users[0].id, groupId: groups[0].id}),
    r({userId: users[0].id, groupId: groups[1].id}),
    r({userId: users[0].id, groupId: groups[2].id}),
    r({userId: users[1].id, groupId: groups[0].id}),
    r({userId: users[1].id, groupId: groups[1].id}),
    r({userId: users[1].id, groupId: groups[2].id}),
    r({userId: users[2].id, groupId: groups[0].id}),
    r({userId: users[2].id, groupId: groups[1].id}),
    r({userId: users[2].id, groupId: groups[2].id}),
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
