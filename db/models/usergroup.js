'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserGroup = sequelize.define('UserGroup', {
    userId: DataTypes.INTEGER,
    groupId: DataTypes.INTEGER
  }, {});
  UserGroup.associate = function(models) {
    // associations can be defined here
    UserGroup.belongsTo(models.User, {foreignKey: 'userId'});
    UserGroup.belongsTo(models.Group, {foreignKey: 'groupId'});
  };
  return UserGroup;
};
