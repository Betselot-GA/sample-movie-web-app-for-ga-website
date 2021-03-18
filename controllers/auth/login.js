const infoLogger = require("../../configuration/logger")

module.exports.getLogin = (req,res,next)=>{
    infoLogger.info("hello")
    res.send("Welcome to login page");
}