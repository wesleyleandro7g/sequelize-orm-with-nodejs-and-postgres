const express = require("express");

const UserController = require("./controllers/UserController");

const app = express();

app.post("/user", UserController.create);
app.get("/users", UserController.selectAll);
app.get("/user", UserController.select);

module.exports = app;
