const express = require('express');
const router = express.Router();


/* GET members content */
router.get("/", (req, res, next) => {
    res.render("membersOnlyRecipes");
  });

  /* GET members content */
router.get("/:recipeId", (req, res, next) => {
    res.render("membersRecipeDetails");
  });







module.exports = router;