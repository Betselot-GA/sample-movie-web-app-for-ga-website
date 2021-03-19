const {getLogin} = require("./auth/login");
const {getSignup,postSignup} = require("./auth/signup");
const {getMovies,getOneMovie} = require("./movieC");

module.exports = {
    getLogin,
    getSignup,
    postSignup,
    getMovies,
    getOneMovie

}