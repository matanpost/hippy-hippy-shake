const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
// require private middleware
const { isLoggedIn, isLoggedOut } = require('../middleware/route-session');


/* GET members content */
router.get("/", isLoggedIn, async(req, res, next) => {
    console.log(req.session) 
    res.render("home", {user: req.session.user});
    
  });

  /* GET members content */
router.get("/:recipeId", isLoggedIn, (req, res, next) => {
    res.render("membersRecipeDetails", {user: req.session.user});
  });





module.exports = router;