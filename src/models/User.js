const { Model, DataTypes } = require("sequelize");

const sequelize = require("../database");

const Address = require("./Address");

class Users extends Model {}
Users.init(
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
  },
  { sequelize, modelName: "users" }
);

Address.belongsTo(Users, {
  foreignKey: "user_id",
  as: "address",
});

Users.hasMany(Address, {
  foreignKey: "user_id",
  as: "address",
});

module.exports = Users;
