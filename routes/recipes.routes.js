const express = require('express');
const router = express.Router();

const Recipe = require('../models/Recipe.model')

/* GET cocktail gallery page */
router.get("/AllRecipes",  async (req, res) => {
  try { 
    const allRecipes = await Recipe.find();
    // console.log('All recipes :', allRecipes)
    res.render("cocktailRecipes", {recipes: allRecipes, user: req.session.user || "undefined"});
  }catch(error){
    console.log('Route to all recipes', error)
  }
})

/* GET new cocktail recipe page */
router.get("/new", (req, res) => {
  res.render("newRecipe",  {user: req.session.user || "undefined"});
})

/* POST new cocktail recipe*/
router.post('/new', async (req, res) => {
  console.log(req.body)
  try {
    // const user = {user: req.session.user || "undefined"}
    // console.log(user)
    const newRecipe = await Recipe.create({
      ...req.body,
      ingredients: req.body.ingredients.split(','),
    })
    res.redirect(`/recipes/${newRecipe._id}`)
  } catch (error) {
    console.log(error)
  }
})

/* POST cocktail recipe --- UPDATE */
router.get('/:recipeId/update', async (req, res) => {
  const recipe = await Recipe.findById(req.params.recipeId)
  res.render('recipes/new', { recipe, update: true })
})

router.post('/:recipeId/update', async (req, res) => {
  await Recipe.findByIdAndUpdate(req.params.recipeId, {
    ...req.body,
    ingredients: req.body.ingredients.split(' '),
  })

  res.redirect(`/recipes/${req.params.recipeId}`)
})

/* POST cocktail recipe --- DELETE*/
router.post('/:recipeId/delete', async (req, res) => {
  await Recipe.findByIdAndDelete(req.params.recipeId)

  res.redirect('/recipes')
})


/* GET cocktail detail page */
router.get("/:recipeId", async (req, res) => {
  const recipeDetails = await Recipe.findById(req.params.recipeId)
  console.log(recipeDetails)
  res.render("recipeDetails", {recipe: recipeDetails, user: req.session.user || "undefined"});
})


module.exports = router;