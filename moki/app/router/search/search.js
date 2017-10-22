
var profile = require('../model/profile');
var product = require('../model/product');



module.exports = function (app, db) { 
 require('./seacrch_product')(app,product);
 require('./save_search')(app, profile)
 require('./get_list_search')(app, profile)
};