
var profile = require('../model/profile');
var product = require('../model/product');



module.exports = function (app, db) { 
 require('./add-order-address')(app,profile);
 require('./del-order-address')(app, profile);
 require('./edit-order-address')(app,profile);
 require('./get-list-order-address')(app,profile);
 
};