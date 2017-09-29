var profile = require('../model/profile');
var product = require('../model/product');



module.exports = function (app, db) { 
 require('./login')(app,profile);
 require('./logout')(app,profile);
};