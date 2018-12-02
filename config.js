var config = {};


config.port = process.env.WEB_PORT || 3000;
config.dbuser = "dbusername";
config.dbpassword = "dbpasswordOfTheUser";
config.dbaddress =  "bc5555.mlab.com:1234/test-project"
config.dbhost = 'mongodb://' + config.dbuser + ':' + config.dbpassword + '@' + config.dbaddress ;
config.title = "BoilerPlate";
config.slogan = "Entrez un catchphrase sur votre entreprise!";


module.exports = config;