const express = require('express');
const router = express.Router();


/* GET members content */
router.get("/private", (req, res, next) => {
    res.render("memberOnly");
  });







module.exports = router;