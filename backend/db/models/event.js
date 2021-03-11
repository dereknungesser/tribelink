'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    name: DataTypes.STRING,
    body: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    date: DataTypes.DATE,
    scheduleId: DataTypes.INTEGER,
    startTime: DataTypes.STRING,
    endTime: DataTypes.STRING
  }, {});
  Event.associate = function(models) {
    Event.belongsTo(models.User, { foreignKey: 'userId' })
    Event.hasMany(models.EventGuest, { foreignKey: 'eventId' })
  };
  return Event;
};
