'use strict';
module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    ownerId: DataTypes.NUMERIC
  }, {});
  Group.associate = function(models) {
    // associations can be defined here
    Group.belongsTo(models.User, {foreignKey: 'ownerId'});
    Group.hasMany(models.UserGroup, {foreignKey: 'groupId'});
    Group.hasMany(models.Event, {foreignKey: 'groupId'});
  };
  return Group;
};
