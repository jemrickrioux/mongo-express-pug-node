var express = require('express');
var router = express.Router();
var ensureToken = require('../middlewares/checkauth');

/* GET home page. */
router.get('/', ensureToken, (req, res, next) => {
  console.log(`ID Stored in SESSION : ${req.session.user._id}`);
  return res.render('profile', { name: req.session.user.username, isSignedIn: req.session.user });
});

module.exports = router;
