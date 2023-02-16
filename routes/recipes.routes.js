const express = require('express');
const router = express.Router();

const Recipe = require('../models/Recipe.model')

const uploader = require('../middleware/cloudinary.config');

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
  res.render("newRecipe",  {user: req.session.user || "undefined", update: false});
})

/* POST new cocktail recipe*/
router.post('/new', uploader.single("imageUrl"), async (req, res) => {
  console.log('file is: ', req.file)
    if (!req.file) {
      console.log("there was an error uploading the file")
      next(new Error('No file uploaded!'));
      return;
    }

  try {
    const newRecipe = await Recipe.create({
      ...req.body,
      ingredients: req.body.ingredients.split(','),
      owner:req.session.user,
      image: req.file.path

    })
    console.log(req.body)
    console.log(req.session.user)
    console.log(req.body.owner)
    

    res.redirect(`/recipes/${newRecipe._id}/details`)
  } catch (error) {
    console.log(error)
  }
})

//POST adding a file
/* router.post('/new', uploader.single("imageUrl"), (req, res, next) => {
  // the uploader.single() callback will send the file to cloudinary and get you and obj with the url in return
  console.log('file is: ', req.file)
  
  if (!req.file) {
    console.log("there was an error uploading the file")
    next(new Error('No file uploaded!'));
    return;
  }
  
  // You will get the image url in 'req.file.path'
  // Your code to store your url in your database should be here
}) */

/* POST cocktail recipe --- UPDATE */
router.get('/:recipeId/update', async (req, res) => {
  const recipe = await Recipe.findById(req.params.recipeId)
  res.render('newRecipe', { recipe, update: true, user: req.session.user || "undefined"})
})

router.post('/:recipeId/update', async (req, res) => {
  await Recipe.findByIdAndUpdate(req.params.recipeId, {
    ...req.body,
    ingredients: req.body.ingredients.split(' '),
  })
  res.redirect(`/recipes/${req.params.recipeId}/details`)
})

/* POST cocktail recipe --- DELETE*/
router.get('/:recipeId/delete', async (req, res) => {
  await Recipe.findByIdAndDelete(req.params.recipeId)
  res.redirect('/recipes/AllRecipes')
})


/* GET cocktail detail page */
router.get("/:recipeId/details", async (req, res) => {
  const recipeDetails = await Recipe.findById(req.params.recipeId)
  // console.log(recipeDetails)
  res.render("recipeDetails", {recipe: recipeDetails, user: req.session.user || "undefined"});
})


module.exports = router;