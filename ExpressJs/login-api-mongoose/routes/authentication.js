var express = require("express");
var router = express.Router();
var UserController = require("../controllers/authentication");
// var md_auth = require("../middlewares/authenticated");

// Register
router.post("/register", UserController.register);

// Login
router.post("/login", UserController.logIn);

// Logout
router.post("/logout", UserController.logOut);

module.exports = router;
