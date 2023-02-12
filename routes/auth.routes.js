const express = require('express');
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("home");
});

/* GET signup page */
router.get("/signup", (req, res, next) => {
  res.render("signup");
});

/* POST signup page */
router.post("/signup", async (req, res, next) => {

  const body = { ...req.body }

  const salt = bcrypt.genSaltSync(10);
  const passwordHash = bcrypt.hashSync(body.password, salt);
  console.log(passwordHash)

  delete body.password
  body.passwordHash = passwordHash

  try{
    await User.create(body)
    res.redirect('/auth');
  } catch (error){
    console.log(error);
  }
});

/* GET login page */
router.get("/login", (req, res, next) => {
    res.render("login");
  });

  /* POST login page */
  router.post("/login", async (req, res, next) => {
    try {
      const userMatch = await User.find({username: req.boday.username})
      if (userMatch.length){
         // we have a user
         const currentUser = userMatch[0]
         if (bcrypt.compareSync(req.body.password, currentUser.passwordHash)){
            //correct password
            
         } else {
            // incorrect password
         }
      } else {
         // we dont have a user
      }
    } catch (error){
      console.log(error);
    }
  })

module.exports = router;
