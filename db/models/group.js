'use strict';
module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    ownerId: DataTypes.NUMERIC
  }, {});
  Group.associate = function(models) {
    // associations can be defined here
  };
  return Group;
};