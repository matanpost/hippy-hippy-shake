const express = require('express');
const router = express.Router();

/* GET landing page */
router.get("/", (req, res, next) => {
  res.render("cocktailRecipes");
});

module.exports = router;