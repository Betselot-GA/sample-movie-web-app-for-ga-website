const morgan = require("morgan");
const {logger} = require("../configuration");
const express = require("express");

module.exports = (app)=>{
    app.use(morgan("dev",{stream:logger.stream}));
    app.use(express.json());
}