'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Board, { foreignKey: 'user_id'})
      User.hasMany(models.Permission, { foreignKey: 'user_id'})

    }
  };
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    salt: DataTypes.STRING,
    session_token: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
