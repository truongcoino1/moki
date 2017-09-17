var profile = require('../model/profile');
var product = require('../model/product');


module.exports = function (app, db) { 
    require('./api-setComment')(app,profile,product);
    require('./api-getComment')(app,product);
};