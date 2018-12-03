var express = require('express'); 
var router = express.Router();
var AuthentificationController = require('../controllers/authentification');
 
router.post('/', AuthentificationController.sign_out);

module.exports = router;
