const { Model, DataTypes } = require("sequelize");

const sequelize = require("../database");

// const User = require("./User");

class Address extends Model {}
Address.init(
  {
    zip_code: DataTypes.STRING,
    number: DataTypes.INTEGER,
    street: DataTypes.STRING,
  },
  { sequelize, modelName: "address" }
);

module.exports = Address;
