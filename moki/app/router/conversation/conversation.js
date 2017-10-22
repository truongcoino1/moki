
var profile = require('../model/profile');
var product = require('../model/product');
var message = require('../../router/model/message');


module.exports = function (app, db) { 
 
 require('./set_conversation')(app, profile,product,message);
};