const express = require("express");

const UserController = require("./controllers/UserController");
const AddressController = require("./controllers/AddressController");

const app = express();

app.post("/user", UserController.create);
app.get("/users", UserController.selectAll);
app.get("/user/:id", UserController.selectOne);
app.delete("/user/:id", UserController.delete);

app.post("/user/:user_id/address", AddressController.store);

module.exports = app;
