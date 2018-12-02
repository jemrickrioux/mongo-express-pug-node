var config = {};


config.port = process.env.WEB_PORT || 3000;
config.dbuser = "jerioux";
config.dbpassword = "leopassword1";
config.dbhost = 'mongodb://' + config.dbuser + ':' + config.dbpassword + '@ds123434.mlab.com:23434/leo-rg';
config.title = "Leo-Rg";

module.exports = config;