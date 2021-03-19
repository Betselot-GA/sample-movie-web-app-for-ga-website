const express = require("express");
const app = express();
const middleware = require("./middlewares");
const routes = require("./routes");
const {logger} = require("./configuration");
const createError = require("http-errors");

//middlewares
middleware(app);

//routes
routes(app);

process.on("unhandledRejection",(reason)=>{
    logger.error(reason);
    process.exit(1);
})


app.use((req,res,next)=>{
    const error = createError(404);
    next(error);
    //res.status(error.statusCode).send(error.message);
});

app.use((error,req,res,next)=>{
    logger.error(error.message);

    res.statusCode = error.statusCode;
    res.json({
        message:error.message
    });
});

module.exports = app;