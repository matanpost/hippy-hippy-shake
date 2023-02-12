const express = require('express');
const router = express.Router();

const User = require("../models/User.model");

const bcrypt = require('bcryptjs')


/* GET home page */
router.get("/", (req, res, next) => {
  res.render("home");
});

/* GET signup page */
router.get("/signup", (req, res, next) => {
  res.render("signup");
});

/* POST signup page */
router.post("/signup", async (req, res, next) => {

  const body = { ...req.body }

  const salt = bcrypt.genSaltSync(10);
  const passwordHash = bcrypt.hashSync(body.password, salt);
  console.log(passwordHash)

  delete body.password
  body.passwordHash = passwordHash

  await User.create(body)
  res.redirect('/auth');
});



/* GET login page */
router.get("/login", (req, res, next) => {
  res.render("login");
});

module.exports = router;
