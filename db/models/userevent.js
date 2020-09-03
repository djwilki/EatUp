'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserEvent = sequelize.define('UserEvent', {
    userId: DataTypes.INTEGER,
    eventId: DataTypes.INTEGER
  }, {});
  UserEvent.associate = function(models) {
    // associations can be defined here
    UserEvent.belongsTo(models.Event, {foreignKey: "eventId"});
    UserEvent.belongsTo(models.User, {foreignKey: "userId"});
  };
  return UserEvent;
};
