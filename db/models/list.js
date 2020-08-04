'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class List extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      List.belongsTo(models.Board, { foreignKey: 'board_id'})
    }
  };
  List.init({
    title: DataTypes.STRING,
    board_id: DataTypes.INTEGER,
    archive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'List',
  });
  return List;
};
