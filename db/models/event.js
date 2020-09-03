'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      validates: {
        len: [3, 255],
      },
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    seats:{
      allowNull: false,
      type: DataTypes.INTEGER
    },
    date: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    hostId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    groupId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
  }, {});
  Event.associate = function(models) {
    // associations can be defined here
    Event.belongsTo(models.Group, {foreignKey: 'groupId'});
    Event.belongsTo(models.User, {foreignKey: 'hostId'});
    Event.hasMany(models.UserEvent, {foreignKey: 'eventId'});
  };
  return Event;
};
