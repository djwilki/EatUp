'use strict';

const bcrypt = require('bcryptjs');

function createPassword() {
  return bcrypt.hashSync('password');
}

function r(o) {
  o.createdAt = new Date();
  o.updatedAt = new Date();
  return o;
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      r({ email: 'demo@example.com', hashedPassword: createPassword(), name: 'Luther' }),
      r({ email: 'yusuke@example.com', hashedPassword: createPassword(), name: 'Vanya' }),
      r({ email: 'petra@example.com', hashedPassword: createPassword(), name: 'Diego' }),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users');
  }
};
