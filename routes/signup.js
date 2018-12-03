var express = require('express'); 
var router = express.Router();
var AuthentificationController = require('../controllers/authentification');
 
router.post('/', AuthentificationController.sign_up);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('signup');
});

module.exports = router;
