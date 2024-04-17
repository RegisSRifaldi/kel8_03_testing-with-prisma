module.exports = router;

var express = require("express");
var router = express.Router();

const users = require("../controller/users");
router.post("/users", users.create);

const { login } = require("../controller/login");
router.post("/login", login);

module.exports = router;
