const {Router} = require("express");
const router = Router();
const {getLogin} = require("../controllers")
const {getSignup} = require("../controllers")

router
.get("/login",getLogin)
.post("/login")
.get("/signup",getSignup)
.post("/signup")

module.exports = router;