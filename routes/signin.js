var express = require('express');  
var router = express.Router();
var AuthentificationController = require('../controllers/authentification');


//Route qui écoutes la réception d'un login form et agit en conséquence (validation/création + envoie du token)
router.post('/', AuthentificationController.sign_in);
  /* GET home page. */
  
router.get('/', function(req, res, next) {
  res.render('signin');
});

module.exports = router;  