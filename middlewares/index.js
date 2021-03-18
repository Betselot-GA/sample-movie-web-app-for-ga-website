const morgan = require("morgan");
const {logger} = require("../configuration")

module.exports = (app)=>{
    app.use(morgan("dev",{stream:logger.stream}));

}