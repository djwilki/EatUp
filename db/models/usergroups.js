'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserGroups = sequelize.define('UserGroups', {
    userId: DataTypes.NUMERIC,
    groupId: DataTypes.NUMERIC
  }, {});
  UserGroups.associate = function(models) {
    // associations can be defined here
  };
  return UserGroups;
};