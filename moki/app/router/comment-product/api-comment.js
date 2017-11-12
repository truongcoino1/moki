var profile = require('../model/profile');
var product = require('../model/product');
var device = require('../push-notification/models/device');

module.exports = function (app, db) { 
    require('./api-setComment')(app,profile,product,device);
    require('./api-getComment')(app,product);
};