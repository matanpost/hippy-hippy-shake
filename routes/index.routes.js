const express = require('express');
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

/* GET Landing page */
router.get("/", (req, res, next) => {
  res.render("landing");
});


module.exports = router;
