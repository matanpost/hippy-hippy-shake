const express = require('express');
const router = express.Router();

/* GET landing page */
router.get("/", (req, res, next) => {
  res.render("landing", {user: req.session.user || "undefined"});
});

/* GET landing page */
router.get("/503", (req, res, next) => {
  res.render("503", {user: req.session.user || "undefined"});
});

/* GET landing page */
router.get("/about", (req, res, next) => {
  res.render("about", {user: req.session.user || "undefined"});
});

// router.get("/recipes/freerecipes", (req, res, next) => {
//   res.render("cocktailRecipes", {user: req.session.user || "undefined"});
// });

// router.get("/recipes/recipeDetails", (req, res, next) => {
//   res.render("recipeDetails", {user: req.session.user || "undefined"});
// });



module.exports = router;
