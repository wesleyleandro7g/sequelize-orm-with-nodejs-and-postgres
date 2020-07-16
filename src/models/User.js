const { Model, DataTypes } = require("sequelize");

const sequelize = require("../database");

// const Address = require("./Address");

class Users extends Model {}
Users.init(
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.INTEGER,
  },
  { sequelize, modelName: "users" }
);

// Users.hasMany(Address);
module.exports = Users;
