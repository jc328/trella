'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Board extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Board.hasMany(models.List, { foreignKey: 'board_id'})
      Board.hasMany(models.Permission, { foreignKey: 'board_id'})

      Board.belongsTo(models.User, { foreignKey: 'board_id'})
    }
  };
  Board.init({
    title: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    favorite: DataTypes.BOOLEAN,
    archive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Board',
  });
  return Board;
};
