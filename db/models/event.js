'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    time: DataTypes.TIME,
    date: DataTypes.DATE,
    hostId: DataTypes.NUMERIC,
    groupId: DataTypes.NUMERIC
  }, {});
  Event.associate = function(models) {
    // associations can be defined here
  };
  return Event;
};