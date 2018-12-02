var express = require('express'); 
var jwt = require('jsonwebtoken');
var router = express.Router();

var User = require('../models/users');
 
router.post('/', function(req, res, next){
    // Confirme que le mot de passes est uniforme
    if (req.body.password !== req.body.passwordConf) {
      var err = new Error('Passwords do not match.');
      err.status = 400;
      res.send("passwords dont match");
      return next(err);
    }
    //si le mot est uniforme et toutes les infos sont la, créer le userdata si le fomr register est rempli
    if (req.body.email &&
      req.body.username &&
      req.body.password &&
      req.body.passwordConf) {
    //Créer l'object qui sera inséré dans la collection
      var userData = {
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
      }
      //console.log(User);
      //Crer une row dans la collection avec les userData
      User.create(userData, function (error, user) {
        if (error) {
          return next(error);
        } else {
          req.session.userId = user._id;
          //console.log("ok");
          return  res.redirect('/profile');
        }
      });
    }
  });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('signup');
});

module.exports = router;
