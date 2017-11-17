var profile = require('../model/profile');

module.exports = function (app, db) { 
  require('./api-get-message-by-token')(app,profile);
};