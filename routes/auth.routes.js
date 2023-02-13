const express = require('express');
const router = express.Router();

const User = require("../models/User.model");

const bcrypt = require('bcryptjs')
// require auth middleware
const { isLoggedIn, isLoggedOut } = require('../middleware/route-session');

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("home", {user: req.session.user || "undefined"});
});

/* GET signup page */
router.get("/signup", isLoggedOut, (req, res, next) => {
  res.render("signup", {user: "undefined"});
});

/* POST signup page */
router.post("/signup", isLoggedOut, async (req, res, next) => {

  const body = { ...req.body }

  const salt = bcrypt.genSaltSync(10);
  const passwordHash = bcrypt.hashSync(body.password, salt);
  console.log(passwordHash)

  delete body.password
  body.passwordHash = passwordHash

  try{
    await User.create(body)
    req.session.user = body
    res.redirect('/members');
  } catch (error){
    console.log(error);
  }
});

/* GET login page */
router.get("/login", isLoggedOut, (req, res, next) => {
  res.render("login", {user: "undefined"});
});

  /* POST login page */
  router.post("/login", isLoggedOut, async (req, res, next) => {
    try {
      const userMatch = await User.find({username: req.body.username})
      if (userMatch.length){
         // we have a user
         const currentUser = userMatch[0]
         if (bcrypt.compareSync(req.body.password, currentUser.passwordHash)){
            //correct password
            req.session.user = currentUser
            res.redirect('/members')
         } else {
            // Incorrect password
        // Render the login page with an error
        res.send('Incorrect password')
      }
    } else {
      // We don't have a user
      // Render the login page with an error
      res.send('User not found')
      }
    } catch (error){
      console.log(error);
    }
  })

  // GET logout
  router.get('/logout', isLoggedIn, (req, res) => {
    req.session.destroy(err => {
      if (err) next(err)
      res.redirect('/auth')
    })
  })  


module.exports = router;
