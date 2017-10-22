
var profile = require('../model/profile');
var product = require('../model/product');



module.exports = function (app, db) { 
 require('./api-get-list-followed')(app,profile);
 require('./api-set-follow')(app, profile);
 require('./api-get-list-following')(app,profile);
 
};