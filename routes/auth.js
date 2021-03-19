const {Router} = require("express");
const router = Router();
const {getLogin,getSignup,postSignup} = require("../controllers")
//const {getSignup} = require("../controllers")

router
.get("/login",getLogin)
.post("/login")
.get("/signup",getSignup)
.post("/signup",postSignup)

module.exports = router;