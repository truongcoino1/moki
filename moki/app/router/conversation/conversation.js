
var profile = require('../model/profile');
var product = require('../model/product');
var message = require('../../router/model/message');


module.exports = function (app, db) { 
 require('./get_conversation')(app, profile,product,message);
 require('./set_conversation')(app, profile,product,message);
 require('./get_list_conversation')(app, profile,product,message);
 require('./get_conversation_detail')(app, profile,product,message);
};