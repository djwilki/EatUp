'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserEvent = sequelize.define('UserEvent', {
    userId: DataTypes.NUMERIC,
    eventId: DataTypes.NUMERIC
  }, {});
  UserEvent.associate = function(models) {
    // associations can be defined here
  };
  return UserEvent;
};