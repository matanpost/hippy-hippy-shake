const express = require('express');
const router = express.Router();

/* GET landing page */
router.get("/", (req, res, next) => {
  res.render("landing", {user: req.session.user || "undefined"});
});

router.get("/recipes", (req, res, next) => {
  res.render("cocktailRecipes", {user: req.session.user || "undefined"});
});

router.get("/recipes/recipeDetails", (req, res, next) => {
  res.render("recipeDetails", {user: req.session.user || "undefined"});
});



module.exports = router;
