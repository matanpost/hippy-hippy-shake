const express = require('express');
const router = express.Router();

/* GET landing page */
router.get("/", (req, res, next) => {
  res.render("landing");
});

router.get("/recipes", (req, res, next) => {
  res.render("cocktailRecipes");
});

router.get("/recipes/recipeDetails", (req, res, next) => {
  res.render("recipeDetails");
});



module.exports = router;
