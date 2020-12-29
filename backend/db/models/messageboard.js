'use strict';
module.exports = (sequelize, DataTypes) => {
  const MessageBoard = sequelize.define('MessageBoard', {
    body: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  MessageBoard.associate = function(models) {
    MessageBoard.belongsTo(models.User, { foreignKey: 'userId' })
  };
  return MessageBoard;
};
