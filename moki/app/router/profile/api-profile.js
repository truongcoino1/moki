var profile = require('../model/profile');
var product = require('../model/product');



module.exports = function (app, db) { 
 require('./api-get-infor')(app,profile);
 require('./api-set-infor')(app,profile);
 require('./product/api-get-list-product-by-profile')(app,profile,product);
 require('./api-update-notification')(app,profile);
};