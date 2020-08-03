'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Permission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Permission.belongsTo(models.Board, { foreignKey: 'board_id' })
      Permission.belongsTo(models.User, { foreignKey: 'user_id' })
    }
  };
  Permission.init({
    user_id: DataTypes.INTEGER,
    board_id: DataTypes.INTEGER,
    admin: DataTypes.BOOLEAN,
    edit: DataTypes.BOOLEAN,
    read: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Permission',
  });
  return Permission;
};
