const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
// require private middleware
const { isLoggedIn, isLoggedOut } = require('../middleware/route-session');


/* GET members content */
router.get("/", isLoggedIn, async(req, res, next) => {
    console.log(req.session) 
    res.render("members", {user: req.session.user});
    
  });

  /* GET member profile */
router.get("/profile", isLoggedIn, (req, res, next) => {
    res.render("profile", {user: req.session.user});
  });

    /* GET member profile */
router.get("/membersOnlyRecipes", isLoggedIn, (req, res, next) => {
  res.render("membersOnlyRecipes", {user: req.session.user});
});





module.exports = router;