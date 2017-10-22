var profile = require('../model/profile');
var product = require('../model/product');


module.exports = function (app, db) { 
 require('./api-report-product')(app,  profile, product);
 require('./api-like-product')(app,  profile, product);
 require('./api-get-my-like')(app,  profile);
};