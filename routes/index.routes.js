const express = require('express');
const router = express.Router();

/* GET landing page */
router.get("/", (req, res, next) => {
  res.render("landing");
});

/* GET Landing page */
router.get("/", (req, res, next) => {
  res.render("landing");
});


module.exports = router;
