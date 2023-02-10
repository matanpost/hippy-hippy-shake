const express = require('express');
const router = express.Router();

/* GET cocktail page */
router.get("/", (req, res, next) => {
  res.render("cocktailRecipes");
});

/* GET cocktail page */
router.get("/:recipeId", (req, res, next) => {
  res.render("recipeDetails");
});




module.exports = router;