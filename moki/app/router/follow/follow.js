
var profile = require('../model/profile');
var product = require('../model/product');
var device = require('../push-notification/models/device');


module.exports = function (app, db) { 
 require('./api-get-list-followed')(app,profile);
 require('./api-set-follow')(app, profile,device);
 require('./api-get-list-following')(app,profile);
 
};