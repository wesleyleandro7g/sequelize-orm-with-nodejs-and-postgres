const express = require("express");
const routes = require("./Routes");

require("./database");

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);
