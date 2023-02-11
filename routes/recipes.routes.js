const express = require('express');
const router = express.Router();

const Recipe = require('../models/Recipe.model')

/* GET cocktail gallery page */
router.get("/",  async (req, res, next) => {
  try { 
    const allRecipes = await Recipe.find();
    res.render("cocktailRecipes", {recipes: allRecipes});
  }catch(error){
    console.log('Route to all recipes', error)
  };
});


/* GET new cocktail recipe page */
router.get("/new", (req, res, next) => {
  res.render("newRecipe");
});

/* POST new cocktail recipe*/
router.post('/new', async (req, res) => {
  console.log(req.body)
  try {
    const newRecipe = await Recipe.create({
      ...req.body,
      ingredients: req.body.ingredients.split(','),
      instructions: req.body.ingredients.split(','),
    })
    res.redirect(`/recipes/${newRecipe._id}`)
  } catch (error) {
    console.log(error)
  }
})

/* PUT cocktail recipe --- UPDATE */
router.put("/:recipeId", (req, res, next) => {
  res.render("recipeDetails");
});

/* PUT cocktail recipe --- DELETE*/
router.put("/:recipeId", (req, res, next) => {
  res.render("recipeDetails");
});

/* GET cocktail detail page */
router.get("/:recipeId", (req, res, next) => {
  res.render("recipeDetails");
});






module.exports = router;