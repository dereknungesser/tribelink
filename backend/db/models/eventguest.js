'use strict';
module.exports = (sequelize, DataTypes) => {
  const EventGuest = sequelize.define('EventGuest', {
    eventId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  EventGuest.associate = function(models) {
    EventGuest.belongsTo(models.Event, { foreignKey: 'eventId' })
    EventGuest.belongsTo(models.User, { foreignKey: 'userId' })

  };
  return EventGuest;
};
