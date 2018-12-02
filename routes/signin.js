var express = require('express');  
var jwt = require('jsonwebtoken');
var router = express.Router();

var User = require('../models/users');

//Route qui écoutes la réception d'un login form et agit en conséquence (validation/création + envoie du token)
router.post('/', function (req, res, next) {
    //Si le formulaire Login est rempli, valide le user avec la db, sinon réponds avec le token et la page profile
    if (req.body.logemail && req.body.logpassword) {
      User.authenticate(req.body.logemail, req.body.logpassword, function (error, user) {
        if (error || !user) {
          var err = new Error('Wrong email or password.');
          err.status = 401;
          return next(err);
        } else {
          req.session.user = user;
          req.session.userId = user._id;
          const token = jwt.sign({ user: user }, toString(Math.random));
          req.session.token = token;
          console.log(`Signin: L: 21 ${req.session.userId} `);
          res.redirect('/profile');
        }
      });
    } else {
      res.render('signin', {message: "ENTER ALL FIELDS"});
    }
  });
  /* GET home page. */
router.get('/', function(req, res, next) {
  res.render('signin');
});

module.exports = router;  