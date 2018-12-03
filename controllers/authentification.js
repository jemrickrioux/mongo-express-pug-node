var jwt = require('jsonwebtoken');
var User = require('../models/users');

exports.sign_in = (req, res, next) => {
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
}

exports.sign_up = (req, res, next) => {
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
}

exports.sign_out = (req, res, next) => {
        req.session.destroy();
        return res.redirect('/');

}