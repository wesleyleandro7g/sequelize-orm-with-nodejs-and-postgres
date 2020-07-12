const express = require("express");

const UserController = require("./controllers/UserController");

const app = express();

app.post("/user", UserController.create);

module.exports = app;
