const { Model, DataTypes } = require("sequelize");

const sequelize = require("../database");

class Users extends Model {}
Users.init(
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
  },
  { sequelize, modelName: "users" }
);

module.exports = Users;
