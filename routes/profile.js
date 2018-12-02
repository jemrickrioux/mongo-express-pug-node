var express = require('express');
var router = express.Router();

var bearerHeader;


function ensureToken(req, res, next) {
  if (req.headers["authorization"]) {
    bearerHeader = req.headers["authorization"];
  } 
  
  if (req.session.token) {
    bearerheader = req.session.token;
  }
  //check if bearer is undefined
  if (typeof bearerHeader !== 'undefined') {
    //get access token from string
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else if (typeof bearerheader !== 'undefined') {
      //get access token from string
      const bearerToken = bearerheader;
      req.token = bearerToken;
      next();

  } else {
    res.render('signin',{message: "NOT AUTHORIZED!"});
  }
}
 
/* GET home page. */
router.get('/', ensureToken, function(req, res, next){
  console.log(`ID Stored in SESSION : ${req.session.user._id}`);
  return res.render('profile', { name: req.session.user.username });
 
});

module.exports = router;
