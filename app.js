const express = require("express");
const app = express();
const middleware = require("./middlewares");
const routes = require("./routes");

//middlewares
middleware(app);

//routes
routes(app);


module.exports = app;